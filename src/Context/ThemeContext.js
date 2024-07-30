import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  activeTabItem: () => {},
  activeId: 'HOME',
  changeTheme: () => {},
  savedVideos: [],
  onSavedVideos: () => {},
})

export default ThemeContext
