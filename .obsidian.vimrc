" Yank to system clipboard
set clipboard=unnamed

" Remap 'jk' to Escape in normal mode
inoremap jk <Esc>
inoremap kj <Esc>

" Navigation between tabs"
exmap next_tab obcommand workspace:next-tab
nmap L :next_tab<CR>
exmap previous_tab obcommand workspace:previous-tab
nmap H :previous_tab<CR>

" Navigation between panes"
exmap right_pane obcommand editor:focus-right
nmap <C-l> :right_pane<CR>
exmap left_pane obcommand editor:focus-left
nmap <C-h> :left_pane<CR>

" Emulate Folding https://vimhelp.org/fold.txt.html#fold-commands
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold
nmap zc :togglefold
nmap za :togglefold

exmap unfoldall obcommand editor:unfold-all
nmap zR :unfoldall

exmap foldall obcommand editor:fold-all
nmap zM :foldall

exmap tabnext obcommand workspace:next-tab
nmap gt :tabnext
exmap tabprev obcommand workspace:previous-tab
nmap gT :tabprev
