const { Plugin } = require('obsidian');

module.exports = class PaneNavigation extends Plugin {
  onload() {
    this.inFiles = false;
    this.registerDomEvent(document, 'pointerdown', event => {
      if (this.app.workspace.rootSplit.containerEl.contains(event.target)) this.inFiles = false;
    });
    this.addCommand({ id: 'left', name: 'Focus left editor or Files', callback: () => this.navigate(-1) });
    this.addCommand({ id: 'right', name: 'Focus right editor or return from Files', callback: () => this.navigate(1) });
  }

  focusEditor(leaf) {
    if (!leaf) return;
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
    if (leaf.view.editor) leaf.view.editor.focus();
  }

  async navigate(direction) {
    const workspace = this.app.workspace;
    const activeElement = document.activeElement;
    const files = workspace.getLeavesOfType('file-explorer')[0];
    const inFiles = files && files.view.containerEl.contains(activeElement);
    const inLeftSidebar = workspace.leftSplit.containerEl.contains(activeElement);
    if (this.inFiles || inFiles || inLeftSidebar) {
      if (direction > 0) {
        this.inFiles = false;
        this.focusEditor(this.lastEditor || workspace.getMostRecentLeaf());
      }
      return;
    }

    const active = workspace.getMostRecentLeaf();
    if (!active) return;
    const current = active.containerEl.getBoundingClientRect();
    const candidates = [];
    workspace.iterateAllLeaves(leaf => {
      if (leaf === active || leaf.getRoot() !== workspace.rootSplit) return;
      const rect = leaf.containerEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dx = (rect.left + rect.width / 2) - (current.left + current.width / 2);
      const overlap = Math.min(rect.bottom, current.bottom) - Math.max(rect.top, current.top);
      if (dx * direction > 1 && overlap > 0) candidates.push({leaf, distance: Math.abs(dx)});
    });
    candidates.sort((a, b) => a.distance - b.distance);
    if (candidates.length) {
      this.focusEditor(candidates[0].leaf);
    } else if (direction < 0) {
      this.lastEditor = active;
      await this.app.commands.executeCommandById('file-explorer:open');
      const explorer = workspace.getLeavesOfType('file-explorer')[0];
      if (explorer) {
        await workspace.revealLeaf(explorer);
        const tree = explorer.view.containerEl.querySelector('.nav-files-container');
        if (tree) tree.focus();
        this.inFiles = true;
      }
    }
  }
};
