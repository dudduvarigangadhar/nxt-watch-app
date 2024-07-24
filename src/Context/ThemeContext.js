import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  activeTabItem: () => {},
  activeId: 'HOME',
  changeTheme: () => {},
})

export default ThemeContext
