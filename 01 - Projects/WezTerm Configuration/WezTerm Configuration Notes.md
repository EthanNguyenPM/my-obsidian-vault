This note reviews the key components of the provided `wezterm.lua` configuration file.

## Configuration File Location

- **`The WezTerm configuration file is typically located in:`**
  - macOS/Linux: `~/.config/wezterm/wezterm.lua`
## Background and Wallpaper

The configuration dynamically sets the terminal's background using a combination of wallpapers and custom opacity settings:

- **Wallpapers Directory**:  
  The wallpapers are fetched from the directory specified by the `wallpapers_glob` variable, which points to:

  ```plaintext
  ~/Documents/Obsidian Vault/03 - Resources/wallpapers macos/**
  ```

  This path uses the `os.getenv("HOME")` function to retrieve the user's home directory dynamically.

- **Opacity Settings**:  
  The opacity for dark and light backgrounds is configurable using the following variables:

  ```lua
  local dark_opacity = 0.65
  local light_opacity = 0.90
  ```

  - Dark opacity: `0.65`
  - Light opacity: `0.90`

- **Utility Functions**:  
  The background is set using utility functions from external Lua modules:
  
  ```lua
  local b = require("utils/background")
  local w = require("utils/wallpaper")
  ```

  The wallpaper is chosen through:

  ```lua
  w.get_wallpaper(wallpapers_glob)
  ```

  And the opacity is applied via:

  ```lua
  b.get_background(dark_opacity, light_opacity)
  ```

## Font and Appearance

- **Font Configuration**:  
  The main font is set to "CommitMono" with fallback to "JetBrains Mono" if the first font is unavailable:

  ```lua
  font = wezterm.font_with_fallback({ "CommitMono", "JetBrains Mono" })
  ```

  The font size is defined as:

  ```lua
  font_size = 20
  ```

- **Color Scheme**:  
  The terminal uses the "nord" color scheme:

  ```lua
  color_scheme = "nord"
  ```

- **Window Padding**:  
  The window padding on all sides is defined as follows:

  ```lua
  window_padding = {
    left = 100,
    right = 100,
    top = 50,
    bottom = 50,
  }
  ```

## Environment Variables

- **Environment Variables**:  
  The environment variables are set inside the configuration, most notably the `LC_ALL` for locale:

  ```lua
  set_environment_variables = {
    LC_ALL = "en_US.UTF-8",
  }
  ```

  There's a placeholder for setting a `BAT_THEME` based on light or dark mode, but it's currently commented out:

  ```lua
  -- BAT_THEME = h.is_dark() and "Catppuccin-mocha" or "Catppuccin-latte"
  ```

## Window Behavior

- **Window Decoration and Size**:  
  The window decorations are minimal, and the window is set to be resizeable:

  ```lua
  window_decorations = "RESIZE"
  ```

  Other window-related configurations include:

  - **Maximizing the window on launch**:  
    The terminal window is maximized when the GUI starts, using the following block:

    ```lua
    wezterm.on("gui-startup", function()
      local tab, pane, window = mux.spawn_window(cmd or {})
      window:gui_window():maximize()
    end)
    ```

  - **Disabling Tab Bar**:  
    The tab bar is disabled by setting:

    ```lua
    enable_tab_bar = false
    ```

  - **Disabling window close confirmation**:  
    This ensures no confirmation prompt appears when closing the window:

    ```lua
    window_close_confirmation = "NeverPrompt"
    ```

## Miscellaneous Options

- **Adjust window size when font size changes**:  
  This option is disabled to prevent the window from resizing when the font size is changed:

  ```lua
  adjust_window_size_when_changing_font_size = false
  ```

- **Initial Rows and Columns**:  
  The initial window size is set to 200 rows and 134 columns:

  ```lua
  initial_rows = 200
  initial_cols = 134
  ```

---

This concludes the overview of the WezTerm configuration. It emphasizes appearance customization, environment setup, and window behavior according to your preferences.

## References

- [Youtube link](https://youtu.be/hqP0XdB7VcA) 
- [Github](https://github.com/joshmedeski/dotfiles/tree/main/.config/wezterm)