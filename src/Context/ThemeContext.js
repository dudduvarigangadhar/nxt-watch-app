import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  activeTabItem: () => {},
  activeId: '',
  changeTheme: () => {},
})

export default ThemeContext
