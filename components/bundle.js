/* @ds-bundle: {"format":4,"namespace":"DS","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Input"},{"name":"Select"},{"name":"FormField"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Segment"},{"name":"Tabs"},{"name":"Pagination"},{"name":"SideNav"},{"name":"Card"},{"name":"StatisticCard"},{"name":"StatusBadge"},{"name":"CategoryBadge"},{"name":"ChangeBadge"},{"name":"InlineAlert"},{"name":"Toast"},{"name":"ConfirmModal"},{"name":"Table"},{"name":"MinimalTable"},{"name":"BarChart"},{"name":"LineChart"},{"name":"DonutChart"},{"name":"GlobalNav"},{"name":"PageHeader"},{"name":"SearchField"},{"name":"DatePicker"},{"name":"Tooltip"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var ICONS = {"search":["0 0 24 24","<path d=\"M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.077 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.077 18.031 16.617ZM16.025 15.875C17.248 14.615 18 12.896 18 11C18 7.133 14.868 4 11 4C7.133 4 4 7.133 4 11C4 14.868 7.133 18 11 18C12.896 18 14.615 17.248 15.875 16.025L16.025 15.875Z\"/>"],"calendar":["0 0 24 24","<path d=\"M9 2V4H15V2H17V4H21C21.552 4 22 4.448 22 5V21C22 21.552 21.552 22 21 22H3C2.448 22 2 21.552 2 21V5C2 4.448 2.448 4 3 4H7V2H9ZM20 12H4V20H20V12ZM7 6H4V10H20V6H17V8H15V6H9V8H7V6Z\"/>"],"add-box":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 3)\" d=\"M1 0L17 0C17.552 0 18 0.448 18 1L18 17C18 17.552 17.552 18 17 18L1 18C0.448 18 0 17.552 0 17L0 1C0 0.448 0.448 0 1 0ZM2 2L2 16L16 16L16 2L2 2ZM8 8L8 4L10 4L10 8L14 8L14 10L10 10L10 14L8 14L8 10L4 10L4 8L8 8Z\"/>"],"add-circle":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2)\" d=\"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9 9L5 9L5 11L9 11L9 15L11 15L11 11L15 11L15 9L11 9L11 5L9 5L9 9Z\"/>"],"add":["0 0 24 24","<path transform=\"matrix(1 0 0 1 5 5)\" d=\"M6 6L6 0L8 0L8 6L14 6L14 8L8 8L8 14L6 14L6 8L0 8L0 6L6 6Z\"/>"],"check":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3.6357 5.9785)\" d=\"M6.364 9.192L15.556 0L16.971 1.414L6.364 12.021L0 5.657L1.414 4.243L6.364 9.192Z\"/>"],"chevron-down":["0 0 24 24","<path transform=\"matrix(1 0 0 1 5.636 8.2217)\" d=\"M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z\"/>"],"chevron-right":["0 0 24 24","<path transform=\"matrix(1 0 0 1 8.2219 5.6367)\" d=\"M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z\"/>"],"circle":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2)\" d=\"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18Z\"/>"],"close":["0 0 24 24","<path transform=\"matrix(1 0 0 1 5.6357 5.6367)\" d=\"M6.364 4.95L11.314 0L12.728 1.414L7.778 6.364L12.728 11.314L11.314 12.728L6.364 7.778L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L6.364 4.95Z\"/>"],"delete-bin":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2)\" d=\"M15 4L20 4L20 6L18 6L18 19C18 19.552 17.552 20 17 20L3 20C2.448 20 2 19.552 2 19L2 6L0 6L0 4L5 4L5 1C5 0.448 5.448 0 6 0L14 0C14.552 0 15 0.448 15 1L15 4ZM16 6L4 6L4 18L16 18L16 6ZM7 9L9 9L9 15L7 15L7 9ZM11 9L13 9L13 15L11 15L11 9ZM7 2L7 4L13 4L13 2L7 2Z\"/>"],"edit":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 1.9194)\" d=\"M3.414 13.971L13.556 3.828L12.142 2.414L2 12.556L2 13.971L3.414 13.971ZM4.243 15.971L0 15.971L0 11.728L11.435 0.293C11.826 -0.098 12.459 -0.098 12.849 0.293L15.678 3.121C16.068 3.512 16.068 4.145 15.678 4.536L4.243 15.971ZM0 17.971L18 17.971L18 19.971L0 19.971L0 17.971Z\"/>"],"expand-up-down":["0 0 24 24","<path transform=\"matrix(1 0 0 1 5.7929 2.8357)\" d=\"M12.414 6.207L6.207 0L0 6.207L1.414 7.621L6.207 2.828L11 7.621L12.414 6.207ZM0 12.122L6.207 18.329L12.414 12.122L11 10.707L6.207 15.5L1.414 10.707L0 12.122Z\"/>"],"eye":["0 0 24 24","<path transform=\"matrix(1 0 0 1 1.1816 3)\" d=\"M10.819 0C16.211 0 20.697 3.88 21.637 9C20.697 14.12 16.211 18 10.819 18C5.426 18 0.941 14.12 0 9C0.941 3.88 5.426 0 10.819 0ZM10.819 16C15.054 16 18.679 13.052 19.596 9C18.679 4.948 15.054 2 10.819 2C6.583 2 2.959 4.948 2.041 9C2.959 13.052 6.583 16 10.819 16ZM10.819 13.5C8.333 13.5 6.319 11.485 6.319 9C6.319 6.515 8.333 4.5 10.819 4.5C13.304 4.5 15.319 6.515 15.319 9C15.319 11.485 13.304 13.5 10.819 13.5ZM10.819 11.5C12.199 11.5 13.319 10.381 13.319 9C13.319 7.619 12.199 6.5 10.819 6.5C9.438 6.5 8.319 7.619 8.319 9C8.319 10.381 9.438 11.5 10.819 11.5Z\"/>"],"function":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 3)\" d=\"M0 1C0 0.448 0.448 0 1 0L7 0C7.552 0 8 0.448 8 1L8 7C8 7.552 7.552 8 7 8L1 8C0.448 8 0 7.552 0 7L0 1ZM0 11C0 10.448 0.448 10 1 10L7 10C7.552 10 8 10.448 8 11L8 17C8 17.552 7.552 18 7 18L1 18C0.448 18 0 17.552 0 17L0 11ZM10 1C10 0.448 10.448 0 11 0L17 0C17.552 0 18 0.448 18 1L18 7C18 7.552 17.552 8 17 8L11 8C10.448 8 10 7.552 10 7L10 1ZM10 11C10 10.448 10.448 10 11 10L17 10C17.552 10 18 10.448 18 11L18 17C18 17.552 17.552 18 17 18L11 18C10.448 18 10 17.552 10 17L10 11Z\"/>"],"loader-2":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2)\" d=\"M10 0C10.552 0 11 0.448 11 1L11 4C11 4.552 10.552 5 10 5C9.448 5 9 4.552 9 4L9 1C9 0.448 9.448 0 10 0ZM10 15C10.552 15 11 15.448 11 16L11 19C11 19.552 10.552 20 10 20C9.448 20 9 19.552 9 19L9 16C9 15.448 9.448 15 10 15ZM20 10C20 10.552 19.552 11 19 11L16 11C15.448 11 15 10.552 15 10C15 9.448 15.448 9 16 9L19 9C19.552 9 20 9.448 20 10ZM5 10C5 10.552 4.552 11 4 11L1 11C0.448 11 0 10.552 0 10C0 9.448 0.448 9 1 9L4 9C4.552 9 5 9.448 5 10ZM17.071 17.071C16.681 17.462 16.047 17.462 15.657 17.071L13.535 14.95C13.145 14.559 13.145 13.926 13.535 13.535C13.926 13.145 14.559 13.145 14.95 13.535L17.071 15.657C17.462 16.047 17.462 16.681 17.071 17.071ZM6.464 6.464C6.074 6.855 5.441 6.855 5.05 6.464L2.929 4.343C2.538 3.953 2.538 3.319 2.929 2.929C3.319 2.538 3.953 2.538 4.343 2.929L6.464 5.05C6.855 5.441 6.855 6.074 6.464 6.464ZM2.929 17.071C2.538 16.681 2.538 16.047 2.929 15.657L5.05 13.535C5.441 13.145 6.074 13.145 6.464 13.535C6.855 13.926 6.855 14.559 6.464 14.95L4.343 17.071C3.953 17.462 3.319 17.462 2.929 17.071ZM13.535 6.464C13.145 6.074 13.145 5.441 13.535 5.05L15.657 2.929C16.047 2.538 16.681 2.538 17.071 2.929C17.462 3.319 17.462 3.953 17.071 4.343L14.95 6.464C14.559 6.855 13.926 6.855 13.535 6.464Z\"/>"],"loader-4":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 3)\" d=\"M15.364 2.636L13.95 4.05C12.683 2.784 10.933 2 9 2C5.134 2 2 5.134 2 9C2 12.866 5.134 16 9 16C12.866 16 16 12.866 16 9L18 9C18 13.971 13.971 18 9 18C4.029 18 0 13.971 0 9C0 4.029 4.029 0 9 0C11.485 0 13.735 1.007 15.364 2.636Z\"/>"],"loader":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3.2051 2)\" d=\"M8.794 0C9.347 0 9.794 0.448 9.794 1L9.794 4C9.794 4.552 9.347 5 8.794 5C8.242 5 7.794 4.552 7.794 4L7.794 1C7.794 0.448 8.242 0 8.794 0ZM8.794 15C9.347 15 9.794 15.448 9.794 16L9.794 19C9.794 19.552 9.347 20 8.794 20C8.242 20 7.794 19.552 7.794 19L7.794 16C7.794 15.448 8.242 15 8.794 15ZM17.455 5C17.731 5.478 17.567 6.09 17.089 6.366L14.491 7.866C14.012 8.142 13.401 7.978 13.125 7.5C12.848 7.022 13.012 6.41 13.491 6.134L16.089 4.634C16.567 4.358 17.179 4.522 17.455 5ZM4.464 12.5C4.74 12.978 4.577 13.59 4.098 13.866L1.5 15.366C1.022 15.642 0.41 15.478 0.134 15C-0.142 14.522 0.022 13.91 0.5 13.634L3.098 12.134C3.577 11.858 4.188 12.022 4.464 12.5ZM17.455 15C17.179 15.478 16.567 15.642 16.089 15.366L13.491 13.866C13.012 13.59 12.848 12.978 13.125 12.5C13.401 12.022 14.012 11.858 14.491 12.134L17.089 13.634C17.567 13.91 17.731 14.522 17.455 15ZM4.464 7.5C4.188 7.978 3.577 8.142 3.098 7.866L0.5 6.366C0.022 6.09 -0.142 5.478 0.134 5C0.41 4.522 1.022 4.358 1.5 4.634L4.098 6.134C4.577 6.41 4.74 7.022 4.464 7.5Z\"/>"],"more-2":["0 0 24 24","<path transform=\"matrix(1 0 0 1 10 3)\" d=\"M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z\"/>"],"pencil":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 2.9194)\" d=\"M12.728 6.657L11.314 5.243L2 14.556L2 15.971L3.414 15.971L12.728 6.657ZM14.142 5.243L15.556 3.828L14.142 2.414L12.728 3.828L14.142 5.243ZM4.243 17.971L0 17.971L0 13.728L13.435 0.293C13.826 -0.098 14.459 -0.098 14.849 0.293L17.678 3.121C18.068 3.512 18.068 4.145 17.678 4.536L4.243 17.971Z\"/>"],"question":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2)\" d=\"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18ZM9 13L11 13L11 15L9 15L9 13ZM11 11.355L11 12L9 12L9 10.5C9 9.948 9.448 9.5 10 9.5C10.828 9.5 11.5 8.828 11.5 8C11.5 7.172 10.828 6.5 10 6.5C9.272 6.5 8.666 7.018 8.529 7.706L6.567 7.313C6.886 5.709 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.586 12.446 10.925 11 11.355Z\"/>"],"settings-3":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2.498 1.9976)\" d=\"M7.456 0.213C8.79 -0.066 10.183 -0.075 11.547 0.21C11.724 1.37 12.407 2.441 13.502 3.073C14.596 3.706 15.866 3.761 16.959 3.335C17.888 4.374 18.577 5.584 19.002 6.879C18.087 7.612 17.502 8.738 17.502 10.002C17.502 11.266 18.088 12.393 19.003 13.126C18.792 13.766 18.512 14.395 18.162 15.002C17.811 15.609 17.407 16.165 16.958 16.668C15.865 16.242 14.596 16.298 13.502 16.93C12.408 17.561 11.725 18.632 11.547 19.79C10.214 20.069 8.821 20.078 7.456 19.793C7.279 18.634 6.596 17.562 5.502 16.93C4.407 16.298 3.137 16.242 2.045 16.669C1.116 15.63 0.427 14.419 0.002 13.124C0.916 12.391 1.502 11.265 1.502 10.002C1.502 8.738 0.915 7.611 0 6.878C0.211 6.237 0.491 5.609 0.841 5.002C1.192 4.395 1.596 3.838 2.045 3.335C3.138 3.761 4.407 3.705 5.502 3.073C6.596 2.442 7.278 1.372 7.456 0.213ZM9.502 13.002C11.158 13.002 12.502 11.659 12.502 10.002C12.502 8.345 11.158 7.002 9.502 7.002C7.845 7.002 6.502 8.345 6.502 10.002C6.502 11.659 7.845 13.002 9.502 13.002Z\"/>"],"settings-4":["0 0 24 24","<path transform=\"matrix(1 0 0 1 2 2.3613)\" d=\"M0 9.638C0 8.774 0.11 7.935 0.316 7.135C1.406 7.192 2.488 6.649 3.072 5.638C3.655 4.629 3.584 3.421 2.991 2.506C4.184 1.334 5.668 0.459 7.326 0C7.822 0.973 8.833 1.638 10 1.638C11.167 1.638 12.178 0.973 12.674 0C14.332 0.459 15.817 1.334 17.009 2.506C16.416 3.421 16.345 4.629 16.928 5.638C17.511 6.649 18.594 7.192 19.684 7.135C19.89 7.935 20 8.774 20 9.638C20 10.503 19.89 11.342 19.684 12.142C18.594 12.085 17.511 12.628 16.928 13.638C16.345 14.648 16.416 15.856 17.009 16.771C15.817 17.943 14.332 18.818 12.674 19.277C12.178 18.304 11.167 17.638 10 17.638C8.833 17.638 7.822 18.304 7.326 19.277C5.668 18.818 4.184 17.943 2.991 16.771C3.584 15.856 3.655 14.648 3.072 13.638C2.488 12.628 1.406 12.085 0.316 12.142C0.11 11.342 0 10.503 0 9.638ZM4.804 12.638C5.434 13.73 5.615 14.985 5.368 16.162C5.776 16.452 6.21 16.704 6.665 16.913C7.562 16.11 8.739 15.638 10 15.638C11.261 15.638 12.438 16.11 13.335 16.913C13.79 16.704 14.224 16.452 14.632 16.162C14.385 14.985 14.566 13.73 15.196 12.638C15.826 11.547 16.822 10.763 17.965 10.388C17.988 10.14 18 9.89 18 9.638C18 9.387 17.988 9.137 17.965 8.889C16.822 8.514 15.826 7.73 15.196 6.638C14.566 5.547 14.385 4.292 14.632 3.115C14.224 2.825 13.79 2.573 13.335 2.364C12.438 3.167 11.261 3.638 10 3.638C8.739 3.638 7.562 3.167 6.665 2.364C6.21 2.573 5.776 2.825 5.368 3.115C5.615 4.292 5.434 5.547 4.804 6.638C4.174 7.73 3.178 8.514 2.035 8.889C2.012 9.137 2 9.387 2 9.638C2 9.89 2.012 10.14 2.035 10.388C3.178 10.763 4.174 11.547 4.804 12.638ZM10 12.638C8.343 12.638 7 11.295 7 9.638C7 7.982 8.343 6.638 10 6.638C11.657 6.638 13 7.982 13 9.638C13 11.295 11.657 12.638 10 12.638ZM10 10.638C10.552 10.638 11 10.191 11 9.638C11 9.086 10.552 8.638 10 8.638C9.448 8.638 9 9.086 9 9.638C9 10.191 9.448 10.638 10 10.638Z\"/>"],"square":["0 0 24 24","<path transform=\"matrix(1 0 0 1 3 3)\" d=\"M1 0L17 0C17.552 0 18 0.448 18 1L18 17C18 17.552 17.552 18 17 18L1 18C0.448 18 0 17.552 0 17L0 1C0 0.448 0.448 0 1 0ZM2 2L2 16L16 16L16 2L2 2Z\"/>"],"subtract":["0 0 24 24","<path transform=\"matrix(1 0 0 1 5 11)\" d=\"M0 0L0 2L14 2L14 0L0 0Z\"/>"],"user":["0 0 24 24","<path transform=\"matrix(1 0 0 1 4 1)\" d=\"M0 21C0 16.582 3.582 13 8 13C12.418 13 16 16.582 16 21L14 21C14 17.686 11.314 15 8 15C4.686 15 2 17.686 2 21L0 21ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z\"/>"]};

  function cx() { var a = []; for (var i = 0; i < arguments.length; i++) if (arguments[i]) a.push(arguments[i]); return a.join(' '); }
  function rest(p, omit) { var o = {}; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k) && omit.indexOf(k) < 0) o[k] = p[k]; return o; }
  function stateCls(s) { return s ? 'is-' + s : null; }

  /* Icon — 회사 Icon Set(line)에서 옮긴 SVG. 색은 currentColor(= 부모의 icon-* 토큰) */
  function Icon(p) {
    var d = ICONS[p.name];
    if (!d) return null;
    return h('span', { className: cx('ds-icon', p.spin && 'ds-spin', p.className), style: p.size ? { width: p.size, height: p.size } : undefined, 'aria-hidden': p.label ? undefined : true, role: p.label ? 'img' : undefined, 'aria-label': p.label },
      h('svg', { viewBox: d[0], fill: 'currentColor', dangerouslySetInnerHTML: { __html: d[1] } }));
  }
  Icon.names = Object.keys(ICONS);

  /* Button — color: primary|neutral|negative|inverse · variant: solid|soft|outline|base|ghost · size: sm|md|lg|xl|2xl */
  function Button(p) {
    var color = p.color || 'neutral', variant = p.variant || 'solid', size = p.size || 'md';
    if (color === 'inverse' && variant === 'base') variant = 'solid';
    var iconOnly = !!p.icon && !p.children;
    var kids = [];
    if (p.loading) kids.push(h(Icon, { key: 'sp', name: 'loader-4', spin: true }));
    else if (p.iconLeft) kids.push(h(Icon, { key: 'l', name: p.iconLeft }));
    if (iconOnly) { if (!p.loading) kids.push(h(Icon, { key: 'i', name: p.icon })); }
    else kids.push(h('span', { key: 't', className: 'ds-btn__label' }, p.children));
    if (p.iconRight && !iconOnly) kids.push(h(Icon, { key: 'r', name: p.iconRight }));
    var o = rest(p, ['color', 'variant', 'size', 'icon', 'iconLeft', 'iconRight', 'loading', 'state', 'fullWidth', 'className', 'children', 'label']);
    o.className = cx('ds-btn', 'ds-btn--' + color, 'ds-btn--' + variant, 'ds-btn--' + size, iconOnly && 'ds-btn--icon', p.fullWidth && 'ds-btn--full', p.loading && 'is-loading', stateCls(p.state), p.state === 'disabled' && 'is-disabled', p.className);
    o.type = p.type || 'button';
    if (p.state === 'disabled') o.disabled = true;
    if (iconOnly) o['aria-label'] = p.label;
    if (p.loading) o['aria-busy'] = true;
    return h('button', o, h('span', { className: 'ds-btn__layer' }, kids));
  }

  /* IconButton — color: neutral|neutral-subtle|primary|negative|inverse · size: 3xs~2xl */
  function IconButton(p) {
    var o = rest(p, ['icon', 'color', 'size', 'state', 'label', 'className', 'loading']);
    o.className = cx('ds-iconbtn', 'ds-iconbtn--' + (p.color || 'neutral'), 'ds-iconbtn--' + (p.size || 'md'), stateCls(p.state), p.className);
    o.type = 'button'; o['aria-label'] = p.label || p.icon;
    if (p.state === 'disabled') o.disabled = true;
    return h('button', o, h(Icon, { name: p.loading ? 'loader-4' : p.icon, spin: !!p.loading }));
  }

  /* TextButton — 문장 안 링크형 · 더보기. color: neutral|neutral-subtle|primary|inverse · size: xs|sm */
  function TextButton(p) {
    var o = rest(p, ['color', 'size', 'underline', 'iconRight', 'state', 'className', 'children']);
    o.className = cx('ds-textbtn', 'ds-textbtn--' + (p.color || 'neutral'), 'ds-textbtn--' + (p.size || 'sm'), p.underline && 'ds-textbtn--underline', stateCls(p.state), p.className);
    o.type = 'button';
    return h('button', o, p.children, p.iconRight ? h(Icon, { name: p.iconRight, size: 16 }) : null);
  }

  function inputCls(p, base) {
    var st = p.state;
    return cx('ds-input', base, 'ds-input--' + (p.variant || 'line'), 'ds-input--' + (p.size || 'xl'),
      p.negative && 'is-negative', (p.readOnly || st === 'read-only') && 'is-readonly', (p.disabled || st === 'disabled') && 'is-disabled',
      st === 'hover' && 'is-hover', st === 'focus' && 'is-focus', (p.value || p.defaultValue) && 'is-filled', p.className);
  }
  /* Input — variant: line|soft|inverse · size: md|xl|2xl · state: default|hover|focus|read-only|disabled */
  function Input(p) {
    var o = rest(p, ['variant', 'size', 'state', 'negative', 'iconLeft', 'iconRight', 'suffix', 'className', 'onClear']);
    if (p.state === 'disabled') o.disabled = true;
    if (p.state === 'read-only') o.readOnly = true;
    if (p.value !== undefined && !p.onChange) o.readOnly = o.readOnly || false, o.onChange = function () {};
    if (p.negative) o['aria-invalid'] = true;
    return h('div', { className: inputCls(p) },
      p.iconLeft ? h(Icon, { name: p.iconLeft }) : null,
      h('input', o),
      p.suffix ? h('span', { className: 'ds-input__suffix' }, p.suffix) : null,
      p.iconRight ? h(Icon, { name: p.iconRight }) : null);
  }

  /* Select — variant: line|soft|ghost · 트리거만 그린다. open=true면 아래에 목록(elevation-3) */
  function Select(p) {
    var opts = p.options || [];
    var label = p.value != null ? (opts.filter(function (x) { return (x.value != null ? x.value : x) === p.value; })[0] || {}).label || p.value : null;
    var trigger = h('div', { className: inputCls(p, 'ds-select'), role: 'combobox', 'aria-expanded': !!p.open, tabIndex: p.state === 'disabled' ? -1 : 0, onClick: p.onToggle },
      h('span', { className: cx('ds-input__value', label == null && 'is-placeholder') }, label != null ? label : (p.placeholder || '선택')),
      h(Icon, { name: 'chevron-down' }));
    if (!p.open) return h('div', { style: { width: p.width || '100%' } }, trigger);
    return h('div', { style: { width: p.width || '100%', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' } }, trigger,
      h('div', { className: 'ds-menu', role: 'listbox' }, opts.map(function (x, i) {
        var v = x.value != null ? x.value : x, l = x.label || x;
        return h('div', { key: i, role: 'option', 'aria-selected': v === p.value, className: cx('ds-menu__item', v === p.value && 'is-active', x.disabled && 'is-disabled'), onClick: function () { p.onChange && !x.disabled && p.onChange(v); } },
          l, v === p.value ? h(Icon, { name: 'check' }) : null);
      })));
  }

  /* FormField — 레이블 → 입력창 → 도움말 · 오류 문구 (세로 간격 8) */
  function FormField(p) {
    return h('div', { className: 'ds-field', style: p.style },
      p.label ? h('label', { className: 'ds-field__label', htmlFor: p.htmlFor }, p.label,
        p.required ? h('span', { className: 'ds-field__req', 'aria-hidden': true }, '*') : null,
        p.optional ? h('span', { className: 'ds-field__opt' }, '(optional)') : null) : null,
      p.children,
      p.error ? h('span', { className: 'ds-field__help is-error', role: 'alert' }, p.error) : p.helper ? h('span', { className: 'ds-field__help' }, p.helper) : null);
  }

  function Toggle(kind, p) {
    var on = !!p.checked, dis = p.disabled || p.state === 'disabled';
    var cls = kind === 'switch'
      ? cx('ds-switch', 'ds-switch--' + (p.size || 'sm'), p.variant === 'green' && 'ds-switch--green', on && 'is-on', dis && 'is-disabled', p.state === 'hover' && 'is-hover', p.className)
      : cx('ds-check', kind === 'radio' && 'ds-radio', 'ds-check--' + (p.size || 'sm'), on && 'is-on', p.negative && 'is-negative', dis && 'is-disabled', p.state === 'hover' && 'is-hover', p.className);
    var role = kind === 'switch' ? 'switch' : kind;
    var ctrl = kind === 'switch'
      ? h('span', { className: 'ds-switch__track' }, h('span', { className: 'ds-switch__handle' }))
      : h('span', { className: 'ds-check__box' }, kind === 'checkbox' && on ? h(Icon, { name: p.indeterminate ? 'subtract' : 'check' }) : null);
    return h('label', { className: cls, role: role, 'aria-checked': on, 'aria-disabled': dis || undefined, tabIndex: dis ? -1 : 0,
      onClick: function (e) { e.preventDefault(); if (!dis && p.onChange) p.onChange(!on); } },
      ctrl,
      (p.label || p.description) ? h('span', null, p.label, p.description ? h('span', { className: 'ds-check__desc' }, p.description) : null) : null);
  }
  /* Checkbox · Radio — size: sm(20)|xs(16) · Switch — size: md|sm|xs|2xs · variant: primary|green */
  function Checkbox(p) { return Toggle('checkbox', p); }
  function Radio(p) { return Toggle('radio', p); }
  function Switch(p) { return Toggle('switch', p); }

  /* Segment — 2~5개 중 하나. color: neutral|primary · size: sm|md|lg */
  function Segment(p) {
    var items = p.items || [];
    return h('div', { role: 'tablist', className: cx('ds-seg', 'ds-seg--' + (p.color || 'neutral'), 'ds-seg--' + (p.size || 'md'), p.fill && 'ds-seg--fill', p.className) },
      items.map(function (it, i) {
        var v = it.value != null ? it.value : it, on = v === p.value;
        return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': on, className: cx('ds-seg__item', on && 'is-active'), onClick: function () { p.onChange && p.onChange(v); } },
          it.icon ? h(Icon, { name: it.icon, size: 16 }) : null, it.label || it);
      }));
  }

  /* Tabs — variant: underline(primary|dark)|ghost */
  function Tabs(p) {
    var items = p.items || [], v = p.variant || 'underline';
    return h('div', { role: 'tablist', className: cx('ds-tabs', 'ds-tabs--' + v, v === 'underline' && p.color === 'primary' && 'ds-tabs--primary', p.className) },
      items.map(function (it, i) {
        var val = it.value != null ? it.value : it, on = val === p.value;
        return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': on, className: cx('ds-tab', on && 'is-active'), onClick: function () { p.onChange && p.onChange(val); } },
          h('span', null, it.label || it));
      }));
  }

  /* Pagination — 현재 페이지 text-heading-main, 나머지 text-body-subtle */
  function Pagination(p) {
    var total = p.total || 1, page = p.page || 1, max = p.max || 5;
    var start = Math.max(1, Math.min(page - Math.floor(max / 2), total - max + 1)), pages = [];
    for (var i = start; i < start + max && i <= total; i++) pages.push(i);
    var go = function (n) { return function () { p.onChange && p.onChange(n); }; };
    return h('nav', { className: 'ds-pager', 'aria-label': '페이지' },
      h('button', { className: 'ds-pager__item', disabled: page <= 1, onClick: go(page - 1), 'aria-label': '이전' }, h('span', { className: 'ds-icon', style: { transform: 'scaleX(-1)' } }, h(Icon, { name: 'chevron-right' }))),
      pages.map(function (n) { return h('button', { key: n, className: cx('ds-pager__item', n === page && 'is-active'), 'aria-current': n === page ? 'page' : undefined, onClick: go(n) }, n); }),
      h('button', { className: 'ds-pager__item', disabled: page >= total, onClick: go(page + 1), 'aria-label': '다음' }, h(Icon, { name: 'chevron-right' })));
  }

  /* SideNav — Side Navigation Item 묶음. color: basic|brand · background: light|dark */
  function SideNav(p) {
    return h('nav', { className: cx('ds-nav', p.background === 'dark' && 'ds-nav--dark', p.className) },
      (p.items || []).map(function (it, i) {
        var on = it.value === p.value;
        return h('button', { key: i, type: 'button', 'aria-current': on ? 'page' : undefined, className: cx('ds-navitem', p.color === 'brand' && 'ds-navitem--brand', it.depth === 2 && 'ds-navitem--d2', on && 'is-active', it.state && 'is-' + it.state), onClick: function () { p.onChange && p.onChange(it.value); } },
          it.icon ? h(Icon, { name: it.icon }) : null, it.label);
      }));
  }

  /* Card — Card Layout + Contents Header. size: lg(PC)|sm(모바일 · 좁은 칸)|xl */
  function Card(p) {
    var head = (p.title || p.action) ? h('div', { className: 'ds-chead' },
      h('div', null, p.title ? h('h3', { className: 'ds-chead__title' }, p.title) : null, p.description ? h('p', { className: 'ds-chead__desc' }, p.description) : null),
      p.action || null) : null;
    return h('section', { className: cx('ds-card', 'ds-card--' + (p.size || 'lg'), p.variant === 'ghost' && 'ds-card--ghost', p.className), style: p.style }, head, p.children);
  }

  /* ChangeBadge — type: increase|decrease|neutral */
  function ChangeBadge(p) {
    var t = p.type || 'neutral';
    return h('span', { className: cx('ds-change', 'ds-change--' + t, p.size === 'sm' && 'ds-change--sm', p.background && 'ds-change--bg') },
      p.children);
  }

  /* StatisticCard — 숫자 하나 + 증감. size: lg|sm (sm은 숫자 · 증감 세로) */
  function StatisticCard(p) {
    var size = p.size || 'lg';
    return h('section', { className: cx('ds-card', 'ds-card--' + size, p.variant === 'ghost' && 'ds-card--ghost'), style: Object.assign({ minWidth: size === 'lg' ? 'var(--size-240px)' : 'var(--size-144px)' }, p.style) },
      h('div', { className: cx('ds-stat', (size === 'sm' || p.vertical) && 'ds-stat--vertical') },
        h('div', { className: 'ds-stat__title' }, p.title),
        h('div', { className: 'ds-stat__num' },
          h('span', { className: 'ds-stat__value' }, p.value, p.unit ? h('span', { className: 'ds-stat__unit' }, p.unit) : null),
          p.change != null ? h(ChangeBadge, { type: p.changeType || 'neutral', size: size === 'sm' ? 'sm' : undefined }, p.change) : null),
        p.description ? h('div', { className: 'ds-stat__desc' }, p.description) : null));
  }

  /* StatusBadge — color: neutral|positive|accent(진행중, 항상 파랑)|warning|negative · variant: soft|solid */
  function StatusBadge(p) {
    return h('span', { className: cx('ds-badge', 'ds-badge--' + (p.size || 'xs'), p.shape === 'pill' && 'ds-badge--pill', 'ds-status--' + (p.color || 'neutral'), p.variant === 'solid' && 'ds-status--solid', p.border && 'ds-status--bordered') },
      p.dot ? h('span', { className: 'ds-badge__dot' }) : null, p.children);
  }

  /* CategoryBadge — 분류 표시. color: 19색(+gray · white). Primitive 분류색 예외 */
  var CAT_FG = { blue: '600' };
  function CategoryBadge(p) {
    var c = p.color || 'gray', pal = c === 'gray' ? 'zinc' : c;
    var style = c === 'white' ? undefined : c === 'gray'
      ? { '--cat-bg': 'var(--color-zinc-100)', '--cat-fg': 'var(--color-zinc-800)', '--cat-bd': 'var(--color-zinc-800)' }
      : { '--cat-bg': 'var(--color-' + pal + '-100)', '--cat-fg': 'var(--color-' + pal + '-' + (CAT_FG[c] || '700') + ')', '--cat-bd': 'var(--color-' + pal + '-500)' };
    return h('span', { className: cx('ds-badge', 'ds-badge--' + (p.size || 'xs'), p.shape === 'pill' && 'ds-badge--pill', 'ds-cat', 'ds-cat--' + c, p.border && 'ds-cat--bordered'), style: style }, p.children);
  }
  CategoryBadge.colors = ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red', 'gray', 'white'];

  var TYPE_LABEL = { information: '안내', warning: '주의', negative: '오류', positive: '완료' };
  /* InlineAlert — type: basic|information|warning|negative|positive · variant: soft|line */
  function InlineAlert(p) {
    var t = p.type || 'basic';
    return h('div', { role: t === 'negative' || t === 'warning' ? 'alert' : 'status', className: cx('ds-alert', 'ds-alert--' + t, p.variant === 'line' && 'ds-alert--line') },
      h('div', { className: 'ds-alert__body' },
        p.title ? h('div', { className: 'ds-alert__title' }, TYPE_LABEL[t] ? h('span', { className: 'ds-alert__tag' }, TYPE_LABEL[t] + ' · ') : null, p.title) : null,
        p.children ? h('div', { className: 'ds-alert__desc' }, p.children) : null,
        p.action ? h('div', null, p.action) : null),
      p.onClose ? h(IconButton, { icon: 'close', size: 'xs', color: 'neutral-subtle', label: '닫기', onClick: p.onClose }) : null);
  }

  /* Toast — type: dark|basic|information|warning|negative|positive */
  function Toast(p) {
    var t = p.type || 'dark';
    return h('div', { role: 'status', className: cx('ds-toast', 'ds-toast--' + t) },
      h('span', { className: 'ds-toast__msg' }, TYPE_LABEL[t] ? h('span', { className: 'ds-toast__tag' }, TYPE_LABEL[t] + ' · ') : null, p.children),
      p.action || null,
      p.onClose ? h(IconButton, { icon: 'close', size: 'xs', color: t === 'dark' ? 'inverse' : 'neutral-subtle', label: '닫기', onClick: p.onClose }) : null);
  }

  /* ConfirmModal — type: basic|negative. 하단 버튼 lg, 주요 행동이 가장 오른쪽 */
  function ConfirmModal(p) {
    var neg = p.type === 'negative';
    return h('div', { className: 'ds-scrim', style: p.inline ? { position: 'relative' } : { position: 'fixed', inset: 0, zIndex: 1000 } },
      h('div', { role: 'dialog', 'aria-modal': true, 'aria-labelledby': 'ds-modal-t', className: 'ds-modal', style: { position: 'relative' } },
        p.onClose ? h('div', { className: 'ds-modal__close' }, h(IconButton, { icon: 'close', size: 'sm', color: 'neutral-subtle', label: '닫기', onClick: p.onClose })) : null,
        h('div', { className: 'ds-modal__body' },
          h('h2', { id: 'ds-modal-t', className: 'ds-modal__title' }, p.title),
          p.children ? h('p', { className: 'ds-modal__desc' }, p.children) : null),
        h('div', { className: cx('ds-modal__foot', p.buttonWidth === 'fill' && 'ds-modal__foot--fill') },
          h(Button, { color: 'neutral', variant: p.secondaryVariant || 'soft', size: 'lg', onClick: p.onCancel }, p.cancelLabel || '취소'),
          h(Button, { color: neg ? 'negative' : 'primary', variant: 'solid', size: 'lg', onClick: p.onConfirm }, p.confirmLabel || (neg ? '삭제' : '확인')))));
  }

  /* Table — PC 표. columns: [{key,label,align:'left'|'center'|'right',numeric,legendColor,render}] · header: main|subtle */
  function Table(p) {
    var cols = p.columns || [];
    function al(c) { return c.numeric || c.align === 'right' ? 'is-right' : c.align === 'center' ? 'is-center' : null; }
    var headRows = [];
    if (p.groups) headRows.push(h('tr', { key: 'g' }, p.groups.map(function (g, i) { return h('th', { key: i, colSpan: g.span || 1, rowSpan: g.rowSpan || 1, className: g.span > 1 ? 'is-group' : al(g) }, g.label); })));
    headRows.push(h('tr', { key: 'h' }, cols.filter(function (c) { return !c.hideHeader; }).map(function (c) {
      return h('th', { key: c.key, scope: 'col', className: al(c), style: c.width ? { width: c.width } : undefined },
        h('span', { className: 'ds-table__th' }, c.legendColor ? h('span', { className: 'ds-legend-sq', style: { '--sq': c.legendColor } }) : null, c.label));
    })));
    return h('div', { className: 'ds-table-wrap' }, h('table', { className: cx('ds-table', p.header === 'subtle' && 'ds-table--header-subtle', p.striped && 'ds-table--striped', p.className) },
      p.caption ? h('caption', { style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' } }, p.caption) : null,
      h('thead', null, headRows),
      h('tbody', null, (p.rows || []).map(function (r, i) {
        return h('tr', { key: i, className: r._selected ? 'is-selected' + (r._selected === true ? '' : '-' + r._selected) : null },
          cols.map(function (c) { return h('td', { key: c.key, className: al(c) }, c.render ? c.render(r[c.key], r) : r[c.key]); }));
      }))));
  }

  /* MinimalTable — 모바일 표. 헤더 항상 흰색(table-header-main), 구분선 없음 */
  function MinimalTable(p) {
    var cols = p.columns || [];
    return h('table', { className: 'ds-mtable' },
      h('thead', null, h('tr', null, cols.map(function (c) {
        return h('th', { key: c.key, scope: 'col', className: c.numeric ? 'is-right' : null }, h('span', { className: 'ds-table__th' }, c.legendColor ? h('span', { className: 'ds-legend-sq', style: { '--sq': c.legendColor } }) : null, c.label));
      }))),
      h('tbody', null, (p.rows || []).map(function (r, i) {
        return h('tr', { key: i }, cols.map(function (c) {
          var v = r[c.key];
          return h('td', { key: c.key, className: c.numeric ? 'is-right' : null }, c.render ? c.render(v, r) : v,
            c.deltaKey && r[c.deltaKey] ? h(ChangeBadge, { size: 'sm', type: r[c.deltaKey].type }, r[c.deltaKey].value) : null);
        }));
      })));
  }

  /* 차트 시리즈 색 — 임시 순서(확정 전). Primitive 직접 사용 예외 */
  var SERIES = ['var(--color-blue-600)', 'var(--color-cyan-500)', 'var(--color-violet-500)', 'var(--color-amber-400)', 'var(--color-emerald-500)', 'var(--color-rose-400)'];
  function sc(s, i) { return s.color || SERIES[i % SERIES.length]; }
  function niceMax(v) { if (v <= 0) return 1; var p = Math.pow(10, Math.floor(Math.log10(v))), n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p; }
  function fmt(v) { return typeof v === 'number' ? v.toLocaleString('ko-KR') : v; }

  function ChartLegend(p) {
    return h('div', { className: 'ds-legend' }, (p.series || []).map(function (s, i) {
      return h('span', { key: i, className: 'ds-legend__item' }, h('span', { className: 'ds-legend-sq', style: { '--sq': sc(s, i) } }), s.name);
    }));
  }

  function frame(p, W, H, maxV, ticks, body) {
    var L = 40, B = 24, T = 8, ih = H - B - T, grid = [];
    for (var t = 0; t <= ticks; t++) {
      var y = T + ih - ih * t / ticks, v = maxV * t / ticks;
      grid.push(h('line', { key: 'g' + t, x1: L, x2: W, y1: y, y2: y, className: t === 0 ? 'ds-chart__axis' : 'ds-chart__grid' }));
      grid.push(h('text', { key: 'l' + t, x: L - 8, y: y + 4, textAnchor: 'end', className: 'ds-chart__label' }, fmt(v)));
    }
    return h('svg', { width: '100%', height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': p.label || '차트' }, grid, body(L, T, ih, W - L));
  }

  /* BarChart — categories + series[{name,data,color?}] · 세로 묶음 막대 */
  function BarChart(p) {
    var cats = p.categories || [], ser = p.series || [], W = p.width || 560, H = p.height || 240;
    var maxV = niceMax(Math.max.apply(null, ser.reduce(function (a, s) { return a.concat(s.data); }, [0])));
    return h('div', { className: 'ds-chart' }, ser.length > 1 || p.legend ? h(ChartLegend, { series: ser }) : null,
      frame(p, W, H, maxV, 4, function (L, T, ih, iw) {
        var gw = iw / cats.length, bw = Math.min(24, (gw * 0.6) / ser.length), out = [];
        cats.forEach(function (c, ci) {
          var x0 = L + gw * ci + (gw - bw * ser.length - 2 * (ser.length - 1)) / 2;
          ser.forEach(function (s, si) {
            var v = s.data[ci] || 0, bh = ih * v / maxV;
            out.push(h('rect', { key: ci + '-' + si, x: x0 + si * (bw + 2), y: T + ih - bh, width: bw, height: bh, rx: 2, style: { fill: sc(s, si) } }, h('title', null, s.name + ' ' + c + ': ' + fmt(v))));
          });
          out.push(h('text', { key: 'c' + ci, x: L + gw * ci + gw / 2, y: T + ih + 18, textAnchor: 'middle', className: 'ds-chart__label' }, c));
        });
        return out;
      }));
  }

  /* LineChart — categories + series · 2px 선 + 끝점 */
  function LineChart(p) {
    var cats = p.categories || [], ser = p.series || [], W = p.width || 560, H = p.height || 240;
    var maxV = niceMax(Math.max.apply(null, ser.reduce(function (a, s) { return a.concat(s.data); }, [0])));
    return h('div', { className: 'ds-chart' }, ser.length > 1 || p.legend ? h(ChartLegend, { series: ser }) : null,
      frame(p, W, H, maxV, 4, function (L, T, ih, iw) {
        var step = iw / Math.max(1, cats.length - 1) * 0.94, x0 = L + iw * 0.03, out = [];
        ser.forEach(function (s, si) {
          var pts = s.data.map(function (v, i) { return [x0 + step * i, T + ih - ih * v / maxV]; });
          out.push(h('polyline', { key: 'p' + si, points: pts.map(function (q) { return q.join(','); }).join(' '), fill: 'none', strokeWidth: 2, strokeLinejoin: 'round', strokeLinecap: 'round', style: { stroke: sc(s, si) } }));
          pts.forEach(function (q, i) { out.push(h('circle', { key: si + 'c' + i, cx: q[0], cy: q[1], r: 3, strokeWidth: 2, style: { fill: 'var(--surface-main)', stroke: sc(s, si) } }, h('title', null, s.name + ' ' + cats[i] + ': ' + fmt(s.data[i])))); });
        });
        cats.forEach(function (c, i) { out.push(h('text', { key: 'x' + i, x: x0 + step * i, y: T + ih + 18, textAnchor: 'middle', className: 'ds-chart__label' }, c)); });
        return out;
      }));
  }

  /* DonutChart — items[{name,value,color?}] · 가운데 합계 */
  function DonutChart(p) {
    var items = p.items || [], S = p.size || 200, r = S / 2, ir = r * 0.62, tot = items.reduce(function (a, x) { return a + x.value; }, 0), a0 = -Math.PI / 2;
    var arcs = items.map(function (x, i) {
      var a1 = a0 + 2 * Math.PI * x.value / tot, lg = a1 - a0 > Math.PI ? 1 : 0;
      var d = ['M', r + r * Math.cos(a0), r + r * Math.sin(a0), 'A', r, r, 0, lg, 1, r + r * Math.cos(a1), r + r * Math.sin(a1), 'L', r + ir * Math.cos(a1), r + ir * Math.sin(a1), 'A', ir, ir, 0, lg, 0, r + ir * Math.cos(a0), r + ir * Math.sin(a0), 'Z'].join(' ');
      a0 = a1;
      return h('path', { key: i, d: d, style: { fill: sc(x, i), stroke: 'var(--surface-main)', strokeWidth: 2 } }, h('title', null, x.name + ': ' + fmt(x.value)));
    });
    return h('div', { className: 'ds-chart', style: { flexDirection: 'row', alignItems: 'center', gap: 'var(--spacing-6)' } },
      h('svg', { width: S, height: S, viewBox: '0 0 ' + S + ' ' + S, role: 'img', 'aria-label': p.label || '도넛 차트' }, arcs,
        h('text', { x: r, y: r + 2, textAnchor: 'middle', className: 'ds-donut__center-value' }, p.centerValue != null ? p.centerValue : fmt(tot)),
        p.centerLabel ? h('text', { x: r, y: r + 20, textAnchor: 'middle', className: 'ds-donut__center-label' }, p.centerLabel) : null),
      h(ChartLegend, { series: items }));
  }
  DonutChart.series = SERIES;

  /* GlobalNav — 높이 56 · surface-main · 좌우 48. width: fill|default(1180)|wide(1440) · tabStyle: ghost|underline · align: left|center */
  function GlobalNav(p) {
    var items = p.items || [], w = p.width || 'fill';
    return h('header', { className: cx('ds-gnb', 'ds-gnb--' + (p.tabStyle || 'ghost'), p.className) },
      h('div', { className: cx('ds-gnb__inner', 'ds-gnb__inner--' + w) },
        h('div', { className: 'ds-gnb__left' }, p.logo || null),
        h('nav', { className: cx('ds-gnb__menu', p.align === 'center' && 'ds-gnb__menu--center') },
          items.map(function (it, i) {
            var v = it.value != null ? it.value : it.label, on = v === p.value;
            return h('button', { key: i, type: 'button', 'aria-current': on ? 'page' : undefined, className: cx('ds-gnb__item', on && 'is-active', it.state && 'is-' + it.state), onClick: function () { p.onChange && p.onChange(v); } },
              h('span', null, it.label), it.hasMenu ? h(Icon, { name: 'chevron-down', size: 16 }) : null);
          })),
        h('div', { className: 'ds-gnb__right' }, p.right || null)));
  }

  /* PageHeader — 페이지 제목 영역. titleSize: xl|2xl|3xl · breadcrumb · description · actions · divider · background: light|dark */
  function PageHeader(p) {
    var crumbs = p.breadcrumb || [];
    return h('div', { className: cx('ds-phead', p.background === 'dark' && 'ds-phead--dark', p.divider && 'ds-phead--divider', p.className) },
      crumbs.length ? h('nav', { className: 'ds-phead__crumbs', 'aria-label': '경로' }, crumbs.map(function (c, i) {
        var last = i === crumbs.length - 1;
        return h(React.Fragment, { key: i }, h('span', { className: cx('ds-phead__crumb', last && 'is-current') }, c), last ? null : h(Icon, { name: 'chevron-right', size: 14 }));
      })) : null,
      h('div', { className: 'ds-phead__row' },
        h('div', { className: 'ds-phead__titles' },
          p.smallTitle ? h('p', { className: 'ds-phead__small' }, p.smallTitle) : null,
          h('h1', { className: cx('ds-phead__title', 'ds-phead__title--' + (p.titleSize || '2xl')) }, p.title,
            p.tooltip ? h('span', { className: 'ds-phead__tip' }, h(Tooltip, { content: p.tooltip, position: 'bottom' })) : null),
          p.description ? h('p', { className: 'ds-phead__desc' }, p.description) : null),
        p.actions ? h('div', { className: 'ds-phead__actions' }, p.actions) : null),
      p.children ? h('div', { className: 'ds-phead__content' }, p.children) : null);
  }

  /* SearchField — 돋보기 아이콘이 붙은 검색 입력창. variant: line|soft|inverse · size: md|lg|xl|2xl · 값이 있으면 지우기 버튼 */
  function SearchField(p) {
    var size = p.size || 'lg', filled = p.value != null && p.value !== '';
    var o = rest(p, ['variant', 'size', 'state', 'onClear', 'className', 'width', 'button', 'onSearch']);
    o.type = 'search'; o.placeholder = p.placeholder || '검색어를 입력해주세요';
    if (p.value !== undefined && !p.onChange) o.onChange = function () {};
    if (p.onSearch) o.onKeyDown = function (e) { if (e.key === 'Enter') p.onSearch(e.target.value); };
    var box = h('label', { className: cx(inputCls(Object.assign({}, p, { size: size }), 'ds-search'), filled && 'is-filled'), style: p.width ? { width: p.width } : undefined },
      h(Icon, { name: 'search' }), h('input', o),
      filled && p.onClear ? h('button', { type: 'button', className: 'ds-search__clear', 'aria-label': '지우기', onClick: p.onClear }, h(Icon, { name: 'close' })) : null);
    if (!p.button) return box;
    return h('div', { className: 'ds-row ds-search-row' }, box, h(Button, { color: 'neutral', variant: 'base', size: size === 'md' ? 'sm' : size === 'lg' ? 'md' : size === 'xl' ? 'lg' : 'xl', onClick: function () { p.onSearch && p.onSearch(p.value); } }, p.button === true ? '검색' : p.button));
  }

  var WEEK = ['일', '월', '화', '수', '목', '금', '토'];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDate(d) { return d ? d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일' : null; }
  function sameDay(a, b) { return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

  /* Calendar — 달력 판(드롭다운 elevation-3). month(Date) · value(Date) · range[from,to] · onChange · onMonth */
  function Calendar(p) {
    var m = p.month || p.value || new Date(), y = m.getFullYear(), mo = m.getMonth();
    var first = new Date(y, mo, 1).getDay(), days = new Date(y, mo + 1, 0).getDate(), cells = [];
    for (var i = 0; i < first; i++) cells.push(null);
    for (var d = 1; d <= days; d++) cells.push(new Date(y, mo, d));
    var r = p.range || [], today = p.today || null;
    return h('div', { className: 'ds-cal', role: 'dialog', 'aria-label': y + '년 ' + (mo + 1) + '월' },
      h('div', { className: 'ds-cal__head' },
        h(IconButton, { icon: 'chevron-right', label: '이전 달', size: 'sm', className: 'ds-cal__prev', onClick: function () { p.onMonth && p.onMonth(new Date(y, mo - 1, 1)); } }),
        h('span', { className: 'ds-cal__title' }, y + '년 ' + (mo + 1) + '월'),
        h(IconButton, { icon: 'chevron-right', label: '다음 달', size: 'sm', onClick: function () { p.onMonth && p.onMonth(new Date(y, mo + 1, 1)); } })),
      h('div', { className: 'ds-cal__grid' },
        WEEK.map(function (w, i) { return h('span', { key: 'w' + i, className: cx('ds-cal__wd', i === 0 && 'is-sun') }, w); }),
        cells.map(function (c, i) {
          if (!c) return h('span', { key: i });
          var sel = sameDay(c, p.value) || sameDay(c, r[0]) || sameDay(c, r[1]);
          var inRange = r[0] && r[1] && c > r[0] && c < r[1];
          return h('button', { key: i, type: 'button', className: cx('ds-cal__day', sel && 'is-selected', inRange && 'is-range', sameDay(c, today) && 'is-today', c.getDay() === 0 && 'is-sun'), 'aria-pressed': sel, onClick: function () { p.onChange && p.onChange(c); } }, c.getDate());
        })));
  }

  /* DatePicker — 날짜 버튼(Neutral base 버튼과 같은 판) + 달력. size: sm|md|lg|xl|2xl · suffix('부터') · open · onToggle */
  function DatePicker(p) {
    var size = p.size || 'xl', dis = p.state === 'disabled';
    return h('div', { className: 'ds-dp' },
      h('button', { type: 'button', disabled: dis, className: cx('ds-dp__btn', 'ds-dp__btn--' + size, stateCls(p.state), !p.value && 'is-empty'), onClick: p.onToggle, 'aria-expanded': !!p.open },
        h('span', { className: 'ds-dp__layer' },
          h(Icon, { name: 'calendar' }),
          h('span', { className: 'ds-dp__text ds-num' }, p.value ? fmtDate(p.value) : (p.placeholder || '날짜 선택')),
          p.suffix ? h('span', { className: 'ds-dp__suffix' }, p.suffix) : null)),
      p.open ? h('div', { className: 'ds-dp__panel' }, h(Calendar, { value: p.value, month: p.month, today: p.today, range: p.range, onChange: p.onChange, onMonth: p.onMonth })) : null);
  }

  /* Tooltip — 물음표 아이콘 + 설명 말풍선(흰 판 · elevation-3). position: top|bottom|left|right · open(고정 표시) · title */
  function Tooltip(p) {
    var s = React.useState(false), hov = s[0], setHov = s[1], show = p.open != null ? p.open : hov;
    return h('span', { className: 'ds-tip', onMouseEnter: function () { setHov(true); }, onMouseLeave: function () { setHov(false); }, onFocus: function () { setHov(true); }, onBlur: function () { setHov(false); } },
      p.children || h('button', { type: 'button', className: 'ds-tip__trigger', 'aria-label': p.label || '도움말' }, h(Icon, { name: 'question', size: 16 })),
      show ? h('span', { role: 'tooltip', className: cx('ds-tip__bubble', 'ds-tip__bubble--' + (p.position || 'top')) },
        p.title ? h('span', { className: 'ds-tip__title' }, p.title) : null,
        h('span', { className: 'ds-tip__body' }, p.content)) : null);
  }

  window.DS = Object.assign(window.DS || {}, {
    Icon: Icon, Button: Button, IconButton: IconButton, TextButton: TextButton, Input: Input, Select: Select, FormField: FormField,
    Checkbox: Checkbox, Radio: Radio, Switch: Switch, Segment: Segment, Tabs: Tabs, Pagination: Pagination, SideNav: SideNav,
    Card: Card, StatisticCard: StatisticCard, StatusBadge: StatusBadge, CategoryBadge: CategoryBadge, ChangeBadge: ChangeBadge,
    InlineAlert: InlineAlert, Toast: Toast, ConfirmModal: ConfirmModal, Table: Table, MinimalTable: MinimalTable,
    BarChart: BarChart, LineChart: LineChart, DonutChart: DonutChart, ChartLegend: ChartLegend, chartSeries: SERIES,
    GlobalNav: GlobalNav, PageHeader: PageHeader, SearchField: SearchField, DatePicker: DatePicker, Calendar: Calendar, Tooltip: Tooltip
  });
})();
