/* @ds-bundle: {"format":4,"namespace":"DS","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Input"},{"name":"Select"},{"name":"FormField"},{"name":"Checkbox"},{"name":"Switch"},{"name":"SegmentNeutral"},{"name":"SegmentPrimary"},{"name":"SegmentPadded"},{"name":"Tabs"},{"name":"Pagination"},{"name":"SideNav"},{"name":"Card"},{"name":"StatisticCard"},{"name":"StatisticNumber"},{"name":"TextCard"},{"name":"StatusBadge"},{"name":"CategoryBadge"},{"name":"ChangeBadge"},{"name":"InlineAlert"},{"name":"ExpandedAlert"},{"name":"Toast"},{"name":"ConfirmModal"},{"name":"Modal"},{"name":"IconModal"},{"name":"PopConfirm"},{"name":"BottomSheet"},{"name":"ReportModal"},{"name":"Table"},{"name":"MinimalTable"},{"name":"BarChart"},{"name":"LineChart"},{"name":"DonutChart"},{"name":"ComboChart"},{"name":"HeatmapChart"},{"name":"GlobalNav"},{"name":"PageHeader"},{"name":"SectionHeader"},{"name":"ContentsHeader"},{"name":"SearchField"},{"name":"DatePicker"},{"name":"Tooltip"},{"name":"TextButton"},{"name":"ToggleButton"},{"name":"SquareButton"},{"name":"SocialButton"},{"name":"FilterButton"},{"name":"FilterMenu"},{"name":"Breadcrumb"},{"name":"PageIndex"},{"name":"PaginationDot"},{"name":"ReportNav"},{"name":"TitleBar"},{"name":"MobileNav"},{"name":"NavDrawer"},{"name":"Avatar"},{"name":"UserMenu"},{"name":"Accordion"},{"name":"Chip"},{"name":"SocialBadge"},{"name":"Profile"},{"name":"Slider"},{"name":"MapLayout"},{"name":"MapSearch"},{"name":"LocationSelector"},{"name":"MapMarkers"},{"name":"MapMenu"},{"name":"MapListItem"},{"name":"SplitButtonGroup"},{"name":"SquareSplitButtonGroup"},{"name":"TextButtonGroup"},{"name":"ButtonSet"},{"name":"MenuButtonSet"},{"name":"DateRangePicker"},{"name":"Password"},{"name":"TextArea"},{"name":"InputQuantity"},{"name":"InputQuantityGroup"},{"name":"InputLabel"},{"name":"DatePickerInline"},{"name":"DateInput"},{"name":"PhoneVerification"},{"name":"Quantity"},{"name":"ControlBox"},{"name":"SelectWithLabel"},{"name":"MenuList"},{"name":"Cascader"},{"name":"MenuCaption"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var ICONS = {"user-avatar": ["0 0 24 24", "<path d=\"M12.051 11.031C14.257 11.031 16.051 9.237 16.051 7.031V6.031C16.051 3.825 14.257 2.031 12.051 2.031C9.845 2.031 8.051 3.825 8.051 6.031V7.031C8.051 9.236 9.845 11.031 12.051 11.031ZM20.883 18.476C20.792 18.34 18.618 15.142 14.293 14.06C14.214 14.04 14.133 14.03 14.051 14.03H10.051C9.969 14.03 9.888 14.04 9.809 14.06C5.484 15.142 3.31 18.34 3.219 18.476C3.11 18.64 3.051 18.833 3.051 19.031V20.031C3.051 20.583 3.498 21.031 4.051 21.031H20.051C20.604 21.031 21.051 20.583 21.051 20.031V19.031C21.051 18.834 20.993 18.64 20.883 18.476Z\"/>"], "map-2": ["0 0 24 24", "<path d=\"M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM16 19.3955L20 17.6812V5.03308L16 6.74736V19.3955ZM14 19.2639V6.73607L10 4.73607V17.2639L14 19.2639ZM8 17.2526V4.60451L4 6.31879V18.9669L8 17.2526Z\"/>"], "list": ["0 0 24 24", "<path d=\"M9 4H20M4 4H5M9 9H20M4 9H5M9 14H20M4 14H5M9 19H20M4 19H5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"], "bar-chart-2": ["0 0 24 24", "<path d=\"M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z\"/>"], "notification-3": ["0 0 24 24", "<path d=\"M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z\"/>"], "refresh": ["0 0 24 24", "<path d=\"M21 13.3591C20.3411 17.6848 16.5343 21 12 21C7.00113 21 3 16.9706 3 12C3 7.02944 7.00113 3 12 3C15.746 3 19.0118 5.26275 20.3878 8.48866L21 10M16.1703 8.70588L21 10L22.294 5.17035\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"], "map-pin-2": ["0 0 24 24", "<path d=\"M12 22.7279L5.63604 16.364C2.12132 12.8492 2.12132 7.15076 5.63604 3.63604C9.15076 0.12132 14.8492 0.12132 18.364 3.63604C21.8787 7.15076 21.8787 12.8492 18.364 16.364L12 22.7279ZM16.9497 14.9497C19.6834 12.2161 19.6834 7.78392 16.9497 5.05025C14.2161 2.31658 9.78392 2.31658 7.05025 5.05025C4.31658 7.78392 4.31658 12.2161 7.05025 14.9497L12 19.8995L16.9497 14.9497ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z\"/>"], "filter-3": ["0 0 24 24", "<path d=\"M9 18H15V16H9V18ZM2 6V8H22V6H2ZM5 13H19V11H5V13Z\"/>"], "search": ["0 0 24 24", "<path d=\"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z\"/>"], "calendar": ["0 0 24 24", "<path d=\"M9 2V4H15V2H17V4H21C21.5523 4 22 4.44772 22 5V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V5C2 4.44772 2.44772 4 3 4H7V2H9ZM20 12H4V20H20V12ZM7 6H4V10H20V6H17V8H15V6H9V8H7V6Z\"/>"], "add-box": ["0 0 24 24", "<path d=\"M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z\"/>"], "add-circle": ["0 0 24 24", "<path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z\"/>"], "add": ["0 0 24 24", "<path d=\"M11 11V3H13V11H21V13H13V21H11V13H3V11H11Z\"/>"], "check": ["0 0 24 24", "<path d=\"M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z\"/>"], "chevron-down": ["0 0 24 24", "<path d=\"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z\"/>"], "chevron-right": ["0 0 24 24", "<path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"/>"], "circle": ["0 0 24 24", "<path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z\"/>"], "close": ["0 0 24 24", "<path d=\"M11.9997 10.5865L17.9495 4.63672L19.3637 6.05093L13.4139 12.0007L19.3637 17.9504L17.9495 19.3646L11.9997 13.4149L6.04996 19.3646L4.63574 17.9504L10.5855 12.0007L4.63574 6.05093L6.04996 4.63672L11.9997 10.5865Z\"/>"], "delete-bin": ["0 0 24 24", "<path d=\"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z\"/>"], "edit": ["0 0 24 24", "<path d=\"M6.41421 15.89L16.5563 5.74786L15.1421 4.33364L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21232C14.8256 1.8218 15.4587 1.8218 15.8492 2.21232L18.6777 5.04075C19.0682 5.43127 19.0682 6.06444 18.6777 6.45496L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z\"/>"], "expand-up-down": ["0 0 24 24", "<path d=\"M18.2072 9.0428L12.0001 2.83569L5.793 9.0428L7.20721 10.457L12.0001 5.66412L16.793 10.457L18.2072 9.0428ZM5.79285 14.9572L12 21.1643L18.2071 14.9572L16.7928 13.543L12 18.3359L7.20706 13.543L5.79285 14.9572Z\"/>"], "eye": ["0 0 24 24", "<path d=\"M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z\"/>"], "function": ["0 0 24 24", "<path d=\"M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z\"/>"], "loader-2": ["0 0 24 24", "<path d=\"M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z\"/>"], "loader-4": ["0 0 24 24", "<path d=\"M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z\"/>"], "loader": ["0 0 24 24", "<path d=\"M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z\"/>"], "more-2": ["0 0 24 24", "<path d=\"M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\"/>"], "pencil": ["0 0 24 24", "<path d=\"M12.8995 6.85454L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85454ZM14.3137 5.44033L16.435 3.31901C16.8256 2.92849 17.4587 2.92849 17.8492 3.31901L20.6777 6.14744C21.0682 6.53796 21.0682 7.17113 20.6777 7.56165L18.5563 9.68297L14.3137 5.44033Z\"/>"], "question": ["0 0 24 24", "<path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z\"/>"], "settings-3": ["0 0 24 24", "<path d=\"M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z\"/>"], "settings-4": ["0 0 24 24", "<path d=\"M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z\"/>"], "square": ["0 0 24 24", "<path d=\"M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z\"/>"], "subtract": ["0 0 24 24", "<path d=\"M4.5 13.5V10.5H19.5V13.5H4.5Z\"/>"], "user": ["0 0 24 24", "<path d=\"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z\"/>"], "chevron-left": ["0 0 24 24", "<path d=\"M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z\"/>"], "home-2": ["0 0 24 24", "<path d=\"M19 21H5C4.44772 21 4 20.5523 4 20V11H1L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11H20V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z\"/>"], "menu": ["0 0 24 24", "<path d=\"M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z\"/>"], "arrow-left": ["0 0 24 24", "<path d=\"M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z\"/>"], "logout-box-r": ["0 0 24 24", "<path d=\"M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z\"/>"], "file-excel-2": ["0 0 24 24", "<path d=\"M2.85858 2.87732L15.4293 1.0815C15.7027 1.04245 15.9559 1.2324 15.995 1.50577C15.9983 1.52919 16 1.55282 16 1.57648V22.4235C16 22.6996 15.7761 22.9235 15.5 22.9235C15.4763 22.9235 15.4527 22.9218 15.4293 22.9184L2.85858 21.1226C2.36593 21.0522 2 20.6303 2 20.1327V3.86727C2 3.36962 2.36593 2.9477 2.85858 2.87732ZM17 2.99997H21C21.5523 2.99997 22 3.44769 22 3.99997V20C22 20.5523 21.5523 21 21 21H17V2.99997ZM10.2 12L13 7.99997H10.6L9 10.2857L7.39999 7.99997H5L7.8 12L5 16H7.39999L9 13.7143L10.6 16H13L10.2 12Z\"/>"], "increase": ["0 0 24 24", "<path d=\"M4.90396 17H19.096C19.861 17 20.2789 16.1355 19.7892 15.566L12.6931 7.31458C12.3324 6.89514 11.6676 6.89514 11.3069 7.31458L4.21084 15.566C3.72113 16.1355 4.13901 17 4.90396 17Z\"/>"], "decrease": ["0 0 24 24", "<path d=\"M19.096 7L4.90396 7C4.13901 7 3.72113 7.86454 4.21084 8.43398L11.3069 16.6854C11.6676 17.1049 12.3324 17.1049 12.6931 16.6854L19.7892 8.43398C20.2789 7.86454 19.861 7 19.096 7Z\"/>"], "alert": ["0 0 24 24", "<path d=\"M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z\"/>"], "information-2": ["0 0 24 24", "<path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z\"/>"], "error-warning": ["0 0 24 24", "<path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z\"/>"], "checkbox-circle": ["0 0 24 24", "<path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z\"/>"], "ruler": ["0 0 24 24", "<path d=\"M6.34323 14.7279L3.5148 17.5564L7.05033 21.0919L20.4854 7.6569L16.9498 4.12137L14.8285 6.24269L16.2427 7.6569L14.8285 9.07112L13.4143 7.6569L11.293 9.77822L13.4143 11.8995L12.0001 13.3137L9.87876 11.1924L7.75744 13.3137L9.17165 14.7279L7.75744 16.1421L6.34323 14.7279ZM17.6569 2.00005L22.6067 6.9498C22.9972 7.34032 22.9972 7.97348 22.6067 8.36401L7.75744 23.2132C7.36692 23.6037 6.73375 23.6037 6.34323 23.2132L1.39348 18.2635C1.00295 17.8729 1.00295 17.2398 1.39348 16.8493L16.2427 2.00005C16.6332 1.60952 17.2664 1.60952 17.6569 2.00005Z\"/>"], "stack": ["0 0 24 24", "<path d=\"M20.0833 15.1999L21.2854 15.9212C21.5221 16.0633 21.5989 16.3704 21.4569 16.6072C21.4146 16.6776 21.3557 16.7365 21.2854 16.7787L12.5144 22.0412C12.1977 22.2313 11.8021 22.2313 11.4854 22.0412L2.71451 16.7787C2.47772 16.6366 2.40093 16.3295 2.54301 16.0927C2.58523 16.0223 2.64413 15.9634 2.71451 15.9212L3.9166 15.1999L11.9999 20.0499L20.0833 15.1999ZM20.0833 10.4999L21.2854 11.2212C21.5221 11.3633 21.5989 11.6704 21.4569 11.9072C21.4146 11.9776 21.3557 12.0365 21.2854 12.0787L11.9999 17.6499L2.71451 12.0787C2.47772 11.9366 2.40093 11.6295 2.54301 11.3927C2.58523 11.3223 2.64413 11.2634 2.71451 11.2212L3.9166 10.4999L11.9999 15.3499L20.0833 10.4999ZM12.5144 1.30864L21.2854 6.5712C21.5221 6.71327 21.5989 7.0204 21.4569 7.25719C21.4146 7.32757 21.3557 7.38647 21.2854 7.42869L11.9999 12.9999L2.71451 7.42869C2.47772 7.28662 2.40093 6.97949 2.54301 6.7427C2.58523 6.67232 2.64413 6.61343 2.71451 6.5712L11.4854 1.30864C11.8021 1.11864 12.1977 1.11864 12.5144 1.30864ZM11.9999 3.33233L5.88723 6.99995L11.9999 10.6676L18.1126 6.99995L11.9999 3.33233Z\"/>"], "focus-3": ["0 0 24 24", "<path d=\"M13 1L13.001 4.06201C16.6192 4.51365 19.4869 7.38163 19.9381 11H23V13L19.938 13.001C19.4864 16.6189 16.6189 19.4864 13.001 19.938L13 23H11V19.9381C7.38163 19.4869 4.51365 16.6192 4.06201 13.001L1 13V11H4.06189C4.51312 7.38129 7.38129 4.51312 11 4.06189V1H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z\"/>"], "share": ["0 0 24 24", "<path d=\"M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z\"/>"]};

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

  /* TextButton — 판 없는 글자형 버튼. color: neutral|neutral-subtle|primary|inverse · size: 3xs(16)|2xs(20)|xs(24) */
  function TextButton(p) {
    var size = p.size === 'sm' ? '2xs' : (p.size || '2xs');
    var o = rest(p, ['color', 'size', 'underline', 'iconLeft', 'iconRight', 'state', 'className', 'children']);
    o.className = cx('ds-textbtn', 'ds-textbtn--' + (p.color || 'neutral'), 'ds-textbtn--' + size, p.underline && 'ds-textbtn--underline', stateCls(p.state), p.className);
    o.type = 'button'; if (p.state === 'disabled') o.disabled = true;
    return h('button', o, p.iconLeft ? h(Icon, { name: p.iconLeft }) : null, h('span', null, p.children), p.iconRight ? h(Icon, { name: p.iconRight }) : null);
  }

  function inputCls(p, base) {
    var st = p.state;
    return cx('ds-input', base, 'ds-input--' + (p.variant || 'line'), 'ds-input--' + (p.size || 'xl'),
      p.negative && 'is-negative', (p.readOnly || st === 'read-only') && 'is-readonly', (p.disabled || st === 'disabled') && 'is-disabled',
      st === 'hover' && 'is-hover', st === 'focus' && 'is-focus', (p.value || p.defaultValue) && 'is-filled', p.shape === 'pill' && 'ds-input--pill', p.className);
  }
  /* Input — variant: line|soft|inverse · size: md|xl|2xl · state: default|hover|focus|read-only|disabled */
  function Input(p) {
    var o = rest(p, ['variant', 'size', 'state', 'negative', 'iconLeft', 'iconRight', 'suffix', 'className', 'onClear', 'textButton']);
    if (p.state === 'disabled') o.disabled = true;
    if (p.state === 'read-only') o.readOnly = true;
    if (p.value !== undefined && !p.onChange) o.readOnly = o.readOnly || false, o.onChange = function () {};
    if (p.negative) o['aria-invalid'] = true;
    return h('div', { className: inputCls(p) },
      p.iconLeft ? h(Icon, { name: p.iconLeft }) : null,
      h('input', o),
      p.suffix ? h('span', { className: 'ds-input__suffix' }, p.suffix) : null,
      p.iconRight ? h(Icon, { name: p.iconRight }) : null,
      p.textButton ? h(TextButton, { size: '2xs', color: 'primary', className: 'ds-input__tb', state: p.state === 'disabled' ? 'disabled' : undefined, onClick: p.textButton.onClick }, p.textButton.label) : null);
  }

  /* Select — variant: line|soft|ghost · 트리거만 그린다. open=true면 아래에 목록(elevation-3) */
  /* usePopup — 열고 닫는 판(Select 목록 · 달력)의 공통 동작.
     open을 주면 부모가 제어(onToggle로 바꿈), 안 주면 컴포넌트가 스스로 연다. 열려 있을 때 판 바깥을 누르거나 Esc를 누르면 닫는다. */
  function usePopup(p) {
    var s = React.useState(false), controlled = p.open != null, open = controlled ? !!p.open : s[0], ref = React.useRef(null);
    var toggle = function () { if (controlled) { p.onToggle && p.onToggle(); } else s[1](!s[0]); };
    var close = function () { if (!open) return; if (p.onClose) p.onClose(); if (controlled) { if (!p.onClose) p.onToggle && p.onToggle(); } else s[1](false); };
    var closeRef = React.useRef(close); closeRef.current = close;
    React.useEffect(function () {
      if (!open) return;
      function down(e) { if (ref.current && !ref.current.contains(e.target)) closeRef.current(); }
      function key(e) { if (e.key === 'Escape') closeRef.current(); }
      document.addEventListener('mousedown', down); document.addEventListener('touchstart', down); document.addEventListener('keydown', key);
      return function () { document.removeEventListener('mousedown', down); document.removeEventListener('touchstart', down); document.removeEventListener('keydown', key); };
    }, [open]);
    return { open: open, toggle: toggle, close: close, ref: ref, controlled: controlled };
  }

  /* useValue — value를 주면 부모가 제어, 안 주면 컴포넌트가 고른 값을 스스로 기억한다(defaultValue로 시작값) */
  function useValue(p) {
    var s = React.useState(p.defaultValue), ctl = p.value !== undefined;
    var val = ctl ? p.value : s[0];
    var set = function (v) { if (!ctl) s[1](v); p.onChange && p.onChange(v); };
    return [val, set];
  }

  function Select(p) {
    var uv = useValue(p); p = Object.assign({}, p, { value: uv[0], onChange: uv[1] });
    var opts = p.options || [], pop = usePopup(p);
    var label = p.value != null ? (opts.filter(function (x) { return x && !x.heading && (x.value != null ? x.value : x) === p.value; })[0] || {}).label || p.value : null;
    var trigger = h('div', { className: inputCls(Object.assign({}, p, { state: p.state || (pop.open ? 'focus' : undefined) }), 'ds-select'), role: 'combobox', 'aria-expanded': pop.open, tabIndex: p.state === 'disabled' ? -1 : 0, onClick: p.state === 'disabled' ? undefined : pop.toggle },
      p.icon ? h(Icon, { name: p.icon, className: 'ds-select__lead' }) : null,
      h('span', { className: cx('ds-input__value', label == null && 'is-placeholder') }, label != null ? label : (p.placeholder || '선택')),
      h(Icon, { name: 'chevron-down' }));
    if (!pop.open) return h('div', { ref: pop.ref, className: 'ds-select-wrap', style: { width: p.width || '100%' } }, trigger);
    /* 목록은 떠 있는 판(아래 내용을 밀지 않음) */
    return h('div', { ref: pop.ref, className: 'ds-select-wrap', style: { width: p.width || '100%' } }, trigger,
      h('div', { className: 'ds-menu ds-select__menu', role: 'listbox' }, p.heading ? h('div', { className: 'ds-menu__heading', role: 'presentation' }, p.heading) : null, opts.map(function (x, i) {
        if (x && x.heading) return h('div', { key: i, className: 'ds-menu__heading', role: 'presentation' }, x.heading);
        var v = x.value != null ? x.value : x, l = x.label || x;
        return h('div', { key: i, role: 'option', 'aria-selected': v === p.value, className: cx('ds-menu__item', v === p.value && 'is-active', x.disabled && 'is-disabled'), onClick: function () { if (x.disabled) return; p.onChange && p.onChange(v); if (!pop.controlled) pop.close(); } },
          l, v === p.value ? h(Icon, { name: 'check' }) : null);
      })));
  }


  /* FormField — 레이블 → 입력창 → 도움말 · 오류 문구 (세로 간격 8) */
  /* InputLabel — 입력 레이블(피그마 Input Label sm · xs). size: sm(15) · xs(14) · color: gray|white · required · optional · tooltip · width */
  function InputLabel(p) {
    return h('label', { className: cx('ds-ilabel', 'ds-ilabel--' + (p.size || 'xs'), p.color === 'white' && 'ds-ilabel--white'), htmlFor: p.htmlFor, style: p.width ? { width: p.width, flex: 'none' } : undefined },
      h('span', null, p.children),
      p.required ? h('span', { className: 'ds-field__req', 'aria-hidden': true }, '*') : null,
      p.optional ? h('span', { className: 'ds-field__opt' }, '(optional)') : null,
      p.tooltip ? h(Tooltip, { content: p.tooltip, position: 'top' }) : null);
  }
  /* FormField — 레이블 + 입력(슬롯, 여러 개면 가로 8) + 도움말. size: md|xl(레이블 xs 14)|2xl(레이블 sm 15) · align: vertical|horizontal · labelWidth(가로) · action(입력 옆 버튼) */
  function FormField(p) {
    var size = p.size || 'xl', hor = p.align === 'horizontal';
    var label = p.label ? h(InputLabel, { size: size === '2xl' ? 'sm' : 'xs', htmlFor: p.htmlFor, required: p.required, optional: p.optional, tooltip: p.tooltip, width: hor ? (p.labelWidth || 120) : undefined }, p.label) : null;
    var help = p.error ? h('span', { className: 'ds-field__help is-error', role: 'alert' }, p.error) : p.helper ? h('span', { className: 'ds-field__help' }, p.helper) : null;
    var inputs = h('div', { className: 'ds-field__inputs' }, p.children, p.action ? h('div', { className: 'ds-field__action' }, p.action) : null);
    if (hor) return h('div', { className: cx('ds-field', 'ds-field--h', 'ds-field--' + size), style: p.style }, label, h('div', { className: 'ds-field__body' }, inputs, help));
    return h('div', { className: cx('ds-field', 'ds-field--' + size), style: p.style }, label, inputs, help);
  }


  function Toggle(kind, p) {
    var on = !!p.checked, dis = p.disabled || p.state === 'disabled';
    var cls = kind === 'switch'
      ? cx('ds-switch', 'ds-switch--' + (p.size || 'sm'), p.variant === 'green' && 'ds-switch--green', p.align === 'right' && 'ds-switch--right', on && 'is-on', dis && 'is-disabled', p.state === 'hover' && 'is-hover', p.className)
      : cx('ds-check', kind === 'radio' && 'ds-radio', 'ds-check--' + (p.size || 'sm'), p.variant && p.variant !== 'primary' && ('ds-check--' + p.variant), on && 'is-on', p.negative && 'is-negative', dis && 'is-disabled', p.state === 'hover' && 'is-hover', p.className);
    var role = kind === 'switch' ? 'switch' : kind;
    var ctrl = kind === 'switch'
      ? h('span', { className: 'ds-switch__track' }, h('span', { className: 'ds-switch__handle' }))
      : h('span', { className: 'ds-check__box' }, kind === 'checkbox' && on ? h(Icon, { name: p.indeterminate ? 'subtract' : 'check' }) : null);
    return h('label', { className: cls, role: role, 'aria-checked': on, 'aria-disabled': dis || undefined, tabIndex: dis ? -1 : 0,
      onClick: function (e) { e.preventDefault(); if (dis || !p.onChange) return; if (kind === 'radio') { if (!on) p.onChange(true); } else p.onChange(!on); } },  /* Radio는 눌러서 끄지 않는다 — 다른 항목을 골라야 바뀜 */
      ctrl,
      (p.label || p.description) ? h('span', { className: 'ds-check__text' }, p.label ? h('span', { className: 'ds-check__label' }, p.label) : null, p.description ? h('span', { className: 'ds-check__desc' }, p.description) : null) : null);
  }
  /* Checkbox · Radio — size: sm(20)|xs(16) · Switch — size: md|sm|xs|2xs · variant: primary|green */
  function Checkbox(p) { return Toggle('checkbox', p); }
  function Radio(p) { return Toggle('radio', p); }
  function Switch(p) { return Toggle('switch', p); }

  /* Segment — 2~5개 중 하나. color: neutral|primary · size: sm|md|lg */
  function Segment(p) {
    var items = p.items || [], style = p.color === 'padded' ? 'padded' : (p.color || 'neutral'), act = -1;
    items.forEach(function (it, i) { var v = it.value != null ? it.value : it; if (v === p.value) act = i; });
    /* 선택 판(indicator)이 선택 항목으로 미끄러져 이동한다 */
    var wrap = React.useRef(null), r = React.useState(null), box = r[0], setBox = r[1], m = React.useRef(false);
    React.useLayoutEffect(function () {
      var el = wrap.current; if (!el) return;
      function upd() { var it = el.querySelectorAll('.ds-seg__item')[act]; setBox(it ? { x: it.offsetLeft, w: it.offsetWidth, y: it.offsetTop, h: it.offsetHeight } : null); }
      upd(); var ro = window.ResizeObserver ? new ResizeObserver(upd) : null; if (ro) ro.observe(el);
      var t = setTimeout(function () { m.current = true; }, 0);
      return function () { if (ro) ro.disconnect(); clearTimeout(t); };
    }, [act, items.length, p.size, p.fill]);
    return h('div', { ref: wrap, role: 'tablist', className: cx('ds-seg', 'ds-seg--' + style, 'ds-seg--' + (p.size || 'md'), p.fill && 'ds-seg--fill', p.className) },
      box ? h('span', { className: cx('ds-seg__ind', m.current && 'is-moving'), 'aria-hidden': true, style: { transform: 'translateX(' + box.x + 'px)', width: box.w, top: box.y, height: box.h } }) : null,
      items.map(function (it, i) {
        var v = it.value != null ? it.value : it, on = i === act;
        return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': on, className: cx('ds-seg__item', on && 'is-active', i === 0 && 'no-first', i === act + 1 && 'after-active'), onClick: function () { p.onChange && p.onChange(v); } },
          h('span', { className: 'ds-seg__layer' }, it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label || it)));
      }));
  }



  /* Tabs — variant: underline(primary|dark)|ghost */
  /* Tabs — 피그마 Tabs/Underline · Ghost · Box · BorderBox.
     variant: underline|ghost|box|borderbox · size: sm|md|lg|xl|2xl(종류별 지원 크기) · color: underline primary|black · borderbox brand|black
     style(borderbox): outline|solid · shape: rounded|pill · fullWidth · items[{value,label,icon,rightIcon,count,disabled}] */
  function Tabs(p) {
    var items = p.items || [], v = p.variant || 'underline', size = p.size || 'md';
    var uv = useValue(p), cur = uv[0];
    return h('div', { role: 'tablist', className: cx('ds-tabs', 'ds-tabs--' + v, 'ds-tabs--' + size, p.color && ('ds-tabs--c-' + p.color), v === 'borderbox' && ('ds-tabs--' + (p.tabStyle || 'outline')), p.shape === 'pill' && 'ds-tabs--pill', p.fullWidth && 'ds-tabs--full', p.className) },
      items.map(function (it, i) {
        var val = it.value != null ? it.value : it, on = val === cur;
        return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': on, disabled: !!it.disabled, className: cx('ds-tab', on && 'is-active'), onClick: function () { if (!on) uv[1](val); } },
          h('span', { className: 'ds-tab__layer' },
            it.icon ? h(Icon, { name: it.icon }) : null,
            h('span', { className: 'ds-tab__label' }, it.label || it),
            it.count != null ? h('span', { className: 'ds-tab__count ds-num' }, it.count) : null,
            it.rightIcon ? h(Icon, { name: it.rightIcon }) : null));
      }));
  }


  /* Pagination — 현재 페이지 text-heading-main, 나머지 text-body-subtle */
  /* Pagination — 피그마 Pagination/Advanced(숫자) · Simple(이전 · 다음만). type: advanced|simple · total · page · max(5|10) · onChange */
  function Pagination(p) {
    var total = p.total || 1, page = p.page || 1, max = p.max || 5;
    var go = function (n) { return function () { if (n >= 1 && n <= total && n !== page) p.onChange && p.onChange(n); }; };
    var prev = h(IconButton, { icon: 'chevron-left', label: '이전', size: 'xs', color: 'neutral-subtle', state: page <= 1 ? 'disabled' : undefined, onClick: go(page - 1) });
    var next = h(IconButton, { icon: 'chevron-right', label: '다음', size: 'xs', color: 'neutral-subtle', state: page >= total ? 'disabled' : undefined, onClick: go(page + 1) });
    if (p.type === 'simple') return h('nav', { className: 'ds-pager ds-pager--simple', 'aria-label': '페이지' }, prev, p.showCount ? h('span', { className: 'ds-pager__count ds-num' }, h('b', null, page), ' / ' + total) : null, next);
    var start = Math.max(1, Math.min(page - Math.floor(max / 2), total - max + 1)), pages = [];
    for (var i = start; i < start + max && i <= total; i++) pages.push(i);
    return h('nav', { className: 'ds-pager', 'aria-label': '페이지' }, prev,
      pages.map(function (n) { return h('button', { key: n, type: 'button', className: cx('ds-pager__item', n === page && 'is-active'), 'aria-current': n === page ? 'page' : undefined, onClick: go(n) }, n); }),
      next);
  }

  /* PaginationDot — 슬라이드 · 카드 넘김 위치 점(피그마 Pagination/Dot). total · page · color: gray|white · onChange(눌러서 이동) */
  function PaginationDot(p) {
    var total = p.total || 4, page = p.page || 1;
    return h('div', { className: cx('ds-dots', p.color === 'white' && 'ds-dots--white'), role: 'tablist', 'aria-label': '위치' }, Array.apply(null, Array(total)).map(function (_, i) {
      var on = i + 1 === page;
      return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': on, 'aria-label': (i + 1) + '번째', className: cx('ds-dots__dot', on && 'is-active'), onClick: function () { p.onChange && p.onChange(i + 1); } });
    }));
  }

  /* Breadcrumb — 현재 위치 경로(피그마 Navigation/Breadcrumb). items[{label,icon,href,onClick}] · home(맨 앞 집 아이콘) · background: light|dark. 마지막 항목 = 현재 */
  function Breadcrumb(p) {
    var items = p.items || [], out = [];
    if (p.home) out.push(h('button', { key: 'home', type: 'button', className: 'ds-bc__home', 'aria-label': '처음', onClick: p.onHome }, h(Icon, { name: 'home-2' })));
    items.forEach(function (it, i) {
      if (out.length) out.push(h('span', { key: 'd' + i, className: 'ds-bc__div', 'aria-hidden': true }, '/'));
      var last = i === items.length - 1;
      out.push(h(last ? 'span' : 'button', { key: i, type: last ? undefined : 'button', className: cx('ds-bc__item', last && 'is-active'), 'aria-current': last ? 'page' : undefined, onClick: last ? undefined : it.onClick }, it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label || it)));
    });
    return h('nav', { className: cx('ds-bc', p.background === 'dark' && 'ds-bc--dark'), 'aria-label': '경로' }, out);
  }

  /* PageIndex — 페이지 안 목차(피그마 Nav Item/Page Index Item). items[{value,label,depth,badge}] · value · onChange · background: light|dark */
  function PageIndex(p) {
    var uv = useValue(p), cur = uv[0];
    return h('nav', { className: cx('ds-pidx', p.background === 'dark' && 'ds-pidx--dark'), 'aria-label': p.label || '목차' }, (p.items || []).map(function (it, i) {
      var v = it.value != null ? it.value : it.label, on = v === cur;
      return h('button', { key: i, type: 'button', className: cx('ds-pidx__item', it.depth === 2 && 'ds-pidx__item--sub', on && 'is-active'), 'aria-current': on ? 'location' : undefined, onClick: function () { uv[1](v); } },
        h('span', { className: 'ds-pidx__label' }, it.label), it.badge ? h(CategoryBadge, { color: 'white', border: true }, it.badge) : null);
    }));
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
  /* ChangeBadge — 증감 표시(피그마 Change Badge). type: increase|decrease|neutral(up/down도 허용) · label(앞 글: "이전 기간 대비") · icon(▲▼) · background */
  function ChangeBadge(p) {
    var t = { up: 'increase', down: 'decrease', positive: 'increase', negative: 'decrease' }[p.type] || p.type || 'neutral';
    return h('span', { className: cx('ds-change', 'ds-change--' + t, p.background && 'ds-change--bg') },
      p.label ? h('span', { className: 'ds-change__label' }, p.label) : null,
      h('span', { className: 'ds-change__value' }, p.children, p.icon !== false && (t === 'increase' || t === 'decrease') ? h(Icon, { name: t }) : null));
  }


  /* StatisticCard — 숫자 하나 + 증감. size: lg|sm (sm은 숫자 · 증감 세로) */
  /* StatisticNumber — 숫자 + 단위 + 변화(피그마 Statistic Number). size: base|lg|xl|2xl · direction: horizontal|vertical · align: left|right|justify
     value · unit · change{label('전월대비'), value('4.8%'), type: increase|decrease|neutral} */
  function StatisticNumber(p) {
    var size = p.size || 'xl', c = p.change;
    return h('div', { className: cx('ds-snum', 'ds-snum--' + size, p.direction === 'vertical' && 'ds-snum--v', 'ds-snum--' + (p.align || 'left')) },
      h('span', { className: 'ds-snum__value ds-num' }, p.value, p.unit ? h('span', { className: 'ds-snum__unit' }, p.unit) : null),
      c ? h('span', { className: cx('ds-snum__change', 'is-' + (c.type || 'neutral')) }, c.label ? h('span', { className: 'ds-snum__label' }, c.label) : null,
        h('span', { className: 'ds-snum__delta ds-num' }, c.value, c.type === 'increase' || c.type === 'decrease' ? h(Icon, { name: c.type }) : null)) : null);
  }
  /* 카드 제목 묶음(Statistic · Text Card 공통): 왼쪽 아이콘 · 제목 · 배지 · 도움말 / 설명, 오른쪽 위 아이콘 */
  function CardTitle(p) {
    if (!p.title && !p.description) return null;
    return h('div', { className: 'ds-ctitle' },
      h('div', { className: 'ds-ctitle__area' },
        h('div', { className: 'ds-ctitle__title' }, p.icon ? h(Icon, { name: p.icon, className: 'ds-ctitle__icon' }) : null, h('span', null, p.title), p.badge ? h(CategoryBadge, { color: 'white', border: true }, p.badge) : null, p.tooltip ? h('span', { className: 'ds-head__tip' }, h(Tooltip, { content: p.tooltip, position: 'bottom' })) : null),
        p.description ? h('p', { className: 'ds-ctitle__desc' }, p.description) : null),
      p.rightIcon ? h(Icon, { name: p.rightIcon, className: 'ds-ctitle__right' }) : null);
  }
  /* StatisticCard — 핵심 숫자 카드(피그마 Statistic Card). size: lg|sm · variant: card|ghost · icon · title · badge · tooltip · description · rightIcon
     value · unit · change{label,value,type} · numberSize(기본 lg: xl / sm: lg) */
  function StatisticCard(p) {
    var size = p.size || 'lg', ch = p.change;
    if (ch != null && typeof ch !== 'object') ch = { value: ch, type: p.changeType === 'positive' || p.changeType === 'up' ? 'increase' : (p.changeType === 'negative' || p.changeType === 'down' ? 'decrease' : (p.changeType || 'neutral')), label: p.changeLabel };
    return h('section', { className: cx('ds-card', 'ds-card--' + size, 'ds-scard', p.variant === 'ghost' && 'ds-card--ghost'), style: p.style },
      h(CardTitle, { icon: p.icon, title: p.title, badge: p.badge, tooltip: p.tooltip, description: p.description, rightIcon: p.rightIcon }),
      h(StatisticNumber, { size: p.numberSize || (size === 'sm' ? 'lg' : 'xl'), direction: size === 'sm' || p.vertical ? 'vertical' : 'horizontal', align: size === 'sm' || p.vertical ? 'left' : (p.align || 'justify'), value: p.value, unit: p.unit, change: ch }));
  }
  /* TextCard — 문장 카드(피그마 Text Card). size: lg|sm · variant: card|ghost · 제목 묶음 + body(text-base semibold) + footer(보조 글 · Text Button) */
  function TextCard(p) {
    var size = p.size || 'lg';
    return h('section', { className: cx('ds-card', 'ds-card--' + size, 'ds-scard', p.variant === 'ghost' && 'ds-card--ghost'), style: p.style },
      h(CardTitle, { icon: p.icon, title: p.title, badge: p.badge, tooltip: p.tooltip, description: p.description, rightIcon: p.rightIcon }),
      h('p', { className: 'ds-tcard__body' }, p.body || p.children),
      (p.footer || p.action) ? h('div', { className: 'ds-tcard__foot' }, h('span', null, p.footer), p.action ? h(TextButton, { size: '3xs', color: 'neutral-subtle', iconRight: 'chevron-right', onClick: p.onAction }, p.action) : null) : null);
  }


  /* StatusBadge — color: neutral|positive|accent(진행중, 항상 파랑)|warning|negative · variant: soft|solid */
  function StatusBadge(p) {
    return h('span', { className: cx('ds-badge', 'ds-badge--' + (p.size || 'xs'), p.shape === 'pill' && 'ds-badge--pill', 'ds-status--' + (p.color || 'neutral'), p.variant === 'solid' && 'ds-status--solid', p.border && 'ds-status--bordered') },
      p.dot ? h('span', { className: 'ds-badge__dot' }) : null, p.iconLeft ? h(Icon, { name: p.iconLeft }) : null, p.children, p.iconRight ? h(Icon, { name: p.iconRight }) : null);
  }

  /* CategoryBadge — 분류 표시. color: 19색(+gray · white). Primitive 분류색 예외 */
  var CAT_FG = { blue: '600' };
  function CategoryBadge(p) {
    var c = p.color || 'gray', pal = c === 'gray' ? 'zinc' : c;
    var style = c === 'white' ? undefined : c === 'gray'
      ? { '--cat-bg': 'var(--color-zinc-100)', '--cat-fg': 'var(--text-body-main)', '--cat-bd': 'var(--color-zinc-800)', '--cat-solid': 'var(--color-zinc-600)' }
      : { '--cat-bg': 'var(--color-' + pal + '-100)', '--cat-fg': 'var(--color-' + pal + '-' + (CAT_FG[c] || '700') + ')', '--cat-bd': 'var(--color-' + pal + '-500)', '--cat-solid': 'var(--color-' + pal + '-' + (c === 'red' ? '700' : '600') + ')' };
    return h('span', { className: cx('ds-badge', 'ds-badge--' + (p.size || 'xs'), p.shape === 'pill' && 'ds-badge--pill', 'ds-cat', 'ds-cat--' + c, p.variant === 'solid' && 'ds-cat--solid', p.border && 'ds-cat--bordered'), style: style }, p.iconLeft ? h(Icon, { name: p.iconLeft }) : null, p.children, p.iconRight ? h(Icon, { name: p.iconRight }) : null);
  }
  CategoryBadge.colors = ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red', 'gray', 'white'];

  var TYPE_LABEL = { information: '안내', warning: '주의', negative: '오류', positive: '완료' };
  /* InlineAlert — type: basic|information|warning|negative|positive · variant: soft|line */


  /* Toast — type: dark|basic|information|warning|negative|positive */


  /* ConfirmModal — type: basic|negative. 하단 버튼 lg, 주요 행동이 가장 오른쪽 */
  /* Dialog 공통 판(피그마 Dialog/*): surface-main + border-neutral-strong + rounded-surface-lg(24) + elevation-4, 여백 24(= 모서리). scrim 위에 띄우거나(inline=false) 문서 안에 그대로(inline) */
  function DialogShell(p, body) {
    var dlg = h('div', { role: p.role || 'dialog', 'aria-modal': true, 'aria-label': typeof p.title === 'string' ? p.title : undefined, className: cx('ds-modal', p.className), style: Object.assign({ width: p.width }, p.style) }, body);
    if (p.bare) return dlg;
    return h('div', { className: cx('ds-scrim', p.sheet && 'ds-scrim--sheet'), style: p.inline ? { position: 'relative', height: p.sheet ? '100%' : undefined } : { position: 'fixed', inset: 0, zIndex: 1000 }, onClick: function (e) { if (e.target === e.currentTarget && p.onClose) p.onClose(); } }, dlg);
  }
  function modalButtons(p, size, defFill) {
    var neg = p.type === 'negative', fill = (p.buttonWidth || (defFill ? 'fill' : 'fit')) === 'fill';
    var btns = p.actions || [h(Button, { key: 'c', color: 'neutral', variant: 'soft', size: size, fullWidth: fill, onClick: p.onCancel || p.onClose }, p.cancelLabel || '취소'), h(Button, { key: 'o', color: neg ? 'negative' : 'primary', variant: 'solid', size: size, fullWidth: fill, onClick: p.onConfirm }, p.confirmLabel || (neg ? '삭제' : '확인'))];
    return h('div', { className: cx('ds-modal__foot', fill && 'ds-modal__foot--fill', p.align === 'center' && 'ds-modal__foot--center') }, btns);
  }
  function modalHead(p, cls) {
    return h('div', { className: cx('ds-modal__head', cls) },
      p.leftItem || null,
      h('h2', { className: cx('ds-modal__title', 'ds-modal__title--' + (p.titleSize || 'base')) }, h('span', null, p.title), p.tooltip ? h('span', { className: 'ds-head__tip' }, h(Tooltip, { content: p.tooltip, position: 'bottom' })) : null),
      p.rightItem || null,
      p.onClose ? h(IconButton, { icon: 'close', size: p.closeSize || 'lg', label: '닫기', onClick: p.onClose }) : null);
  }
  /* ConfirmModal — 확인 · 삭제(피그마 Dialog/Confirm Modal). type: basic|negative · align: left|center · buttonWidth: fit|fill · title(text-base bold) · children(text-base medium body-main) */
  function ConfirmModal(p) {
    return DialogShell(Object.assign({ width: 320 }, p), [
      h('div', { key: 'b', className: cx('ds-modal__body', p.align === 'center' && 'is-center') }, modalHead(p), p.children ? h('p', { className: 'ds-modal__msg' }, p.children) : null),
      h(React.Fragment, { key: 'f' }, modalButtons(p, 'xl'))]);
  }
  /* Modal — 내용을 담는 대화상자(피그마 Dialog/Contents Modal). titleSize: base|xl · description · tooltip · leftItem · rightItem · children(콘텐츠) · actions · buttonWidth · onClose */
  function Modal(p) {
    return DialogShell(Object.assign({ width: 400 }, p), [
      h('div', { key: 'b', className: cx('ds-modal__body', p.align === 'center' && 'is-center') },
        h('div', { className: 'ds-modal__titles' }, modalHead(p), p.description ? h('p', { className: 'ds-modal__desc' }, p.description) : null),
        p.children ? h('div', { className: 'ds-modal__content' }, p.children) : null),
      p.actions === null ? null : h(React.Fragment, { key: 'f' }, modalButtons(p, 'lg'))]);
  }
  /* IconModal — 결과 알림(피그마 Dialog/Icon Modal). icon: success|info|warning|negative(48 원 · surface-*-main + icon-*-main) · title(bold) · children(text-md medium) · 버튼 기본 꽉 채움 */
  var ICON_MODAL = { success: ['checkbox-circle', 'positive'], info: ['information-2', 'informative'], warning: ['alert', 'warning'], negative: ['error-warning', 'negative'] };
  function IconModal(p) {
    var ic = ICON_MODAL[p.icon || 'success'] || ICON_MODAL.success, center = (p.align || 'center') === 'center';
    return DialogShell(Object.assign({ width: 320 }, p), [
      h('div', { key: 'b', className: cx('ds-modal__body', 'ds-imodal', center && 'is-center') },
        p.onClose ? h('div', { className: 'ds-imodal__close' }, h(IconButton, { icon: 'close', size: 'lg', label: '닫기', onClick: p.onClose })) : null,
        h('span', { className: 'ds-imodal__icon ds-imodal__icon--' + ic[1] }, h(Icon, { name: ic[0] })),
        h('div', { className: 'ds-imodal__text' }, h('h2', { className: 'ds-modal__title ds-modal__title--base' }, p.title), p.children ? h('p', { className: 'ds-imodal__msg' }, p.children) : null)),
      h(React.Fragment, { key: 'f' }, modalButtons(Object.assign({ align: center ? 'center' : 'left', actions: p.actions || [h(Button, { key: 'o', color: 'neutral', variant: 'soft', size: 'lg', fullWidth: (p.buttonWidth || 'fill') === 'fill', onClick: p.onConfirm || p.onClose }, p.confirmLabel || '확인')] }, p), 'lg', true))]);
  }
  /* PopConfirm — 버튼 옆에 뜨는 작은 확인(피그마 Dialog/Pop Confirm). type: basic|negative · 폭 248 · 여백 12 · rounded-surface-xs · title(text-sm bold) · children(text-sm) · 버튼 md */
  function PopConfirm(p) {
    var neg = p.type === 'negative';
    return h('div', { role: 'alertdialog', className: 'ds-popc', style: p.style },
      h('div', { className: 'ds-popc__head' }, h('b', null, p.title), p.onClose ? h(IconButton, { icon: 'close', size: '3xs', label: '닫기', onClick: p.onClose }) : null),
      p.children ? h('p', { className: 'ds-popc__msg' }, p.children) : null,
      h('div', { className: 'ds-popc__foot' }, h(Button, { color: neg ? 'neutral' : 'primary', variant: neg ? 'soft' : 'ghost', size: 'md', onClick: p.onCancel || p.onClose }, p.cancelLabel || '취소'), h(Button, { color: neg ? 'negative' : 'primary', variant: 'solid', size: 'md', onClick: p.onConfirm }, p.confirmLabel || (neg ? '삭제' : '확인'))));
  }
  /* BottomSheet — 모바일 아래에서 올라오는 판(피그마 Dialog/Bottom Sheet). size: sm(제목 base)|md(제목 lg) · description · children · actions(꽉 찬 버튼 xl) · onClose */
  function BottomSheet(p) {
    return DialogShell(Object.assign({ sheet: true, className: 'ds-sheet' }, p, { titleSize: p.size === 'sm' ? 'base' : 'lg' }), [
      h('div', { key: 'h', className: 'ds-sheet__grab', 'aria-hidden': true }),
      h('div', { key: 'b', className: cx('ds-modal__body', p.align === 'center' && 'is-center') },
        h('div', { className: 'ds-modal__titles ds-sheet__titles' }, modalHead(Object.assign({}, p, { titleSize: p.size === 'sm' ? 'base' : 'lg' })), p.description ? h('p', { className: 'ds-modal__desc' }, p.description) : null),
        p.children ? h('div', { className: 'ds-modal__content' }, p.children) : null),
      p.actions === null ? null : h(React.Fragment, { key: 'f' }, modalButtons(Object.assign({ buttonWidth: 'fill' }, p), 'xl', true))]);
  }
  /* ReportModal — 리포트 상세를 띄우는 큰 모달(피그마 Report Modal). style: clear|section(머리 fill-primary-strong) · menu[{value,label}](왼쪽 목차) · value · onChange · title(text-lg bold) · description · rightItem · children */
  /* ReportModal — 반응형: 판 폭이 600 미만이면(모바일 · 좁은 창) 자동으로 모바일 형태 — 머리 여백 16/20 · 제목 text-base · 왼쪽 목차는 위 탭(가로 스크롤)으로, 화면을 꽉 채움 */
  function ReportModal(p) {
    var sec = p.styleType === 'section', top = p.menuPosition === 'top', center = p.align === 'center';
    var uv = useValue(p), val = uv[0];
    var tabs = p.menu ? h('div', { key: 'm', className: cx('ds-rmodal__tabs', !top && 'ds-rmodal__tabs--mobile') }, h(Tabs, { items: p.menu, value: val, onChange: uv[1], size: 'lg' })) : null;
    var side = p.menu && !top ? h('div', { className: 'ds-rmodal__menu' }, h(PageIndex, { items: p.menu, value: val, onChange: uv[1] })) : null;
    var dlg = DialogShell(Object.assign({ width: 700 }, p, { className: cx('ds-rmodal', p.mobile && 'is-mobile') }), [
      h('div', { key: 'h', className: cx('ds-rmodal__head', sec && 'is-section', center && 'is-center', p.menu && 'has-tabs') },
        h('div', { className: 'ds-modal__head' }, p.leftItem || null, h('h2', { className: 'ds-modal__title ds-modal__title--lg' }, h('span', null, p.title), p.tooltip ? h('span', { className: 'ds-head__tip' }, h(Tooltip, { content: p.tooltip, position: 'bottom' })) : null), p.rightItem ? h('span', { className: 'ds-rmodal__right' }, p.rightItem) : null,
          p.onClose ? h(IconButton, { icon: 'close', size: 'sm', color: sec ? 'inverse' : 'neutral', label: '닫기', onClick: p.onClose }) : null),
        p.description ? h('p', { className: 'ds-modal__desc' }, p.description) : null),
      tabs,
      h('div', { key: 'c', className: 'ds-rmodal__body' }, side, h('div', { className: 'ds-rmodal__content' }, p.children))]);
    return dlg;
  }




  /* Table — PC 표. columns: [{key,label,align:'left'|'center'|'right',numeric,legendColor,render}] · header: main|subtle */
  /* Table — 데이터 표(피그마 🏁 Table v1.0). columns[{key,label,align,numeric,width,icon,tooltip,render,fixed}] · rows · selectable(체크박스 열 + 전체 선택) · selected[] · onSelect
     fixedFirst(첫 열 고정 · 가로 스크롤) · header main|subtle · striped · groups(묶음 머리) */
  function Table(p) {
    var cols = p.columns || [], rows = p.rows || [];
    var sv = useValue({ value: p.selected, defaultValue: p.defaultSelected || [], onChange: p.onSelect }), sel = sv[0] || [];
    function al(c) { return c.numeric || c.align === 'right' ? 'is-right' : c.align === 'center' ? 'is-center' : null; }
    function rid(r, i) { return r.id != null ? r.id : i; }
    var all = rows.length > 0 && rows.every(function (r, i) { return sel.indexOf(rid(r, i)) >= 0; }), some = !all && rows.some(function (r, i) { return sel.indexOf(rid(r, i)) >= 0; });
    function toggle(id) { var a = sel.slice(), k = a.indexOf(id); if (k >= 0) a.splice(k, 1); else a.push(id); sv[1](a); }
    /* 고정 열: fixed 열(또는 fixedFirst면 첫 열)을 왼쪽부터 width를 더해 붙인다. 마지막 고정 열에만 그림자 */
    var fx = cols.map(function (c, ci) { return !!(c.fixed || (p.fixedFirst && ci === 0)); }), lefts = [], acc = p.selectable ? 40 : 0, lastFx = fx.lastIndexOf(true);
    cols.forEach(function (c, ci) { lefts.push(fx[ci] ? acc : null); if (fx[ci]) acc += (c.width || 120); });
    function fxCls(ci) { return fx[ci] ? cx('is-fixed', ci === lastFx && 'is-fixed-last') : null; }
    function fxSty(ci, base) { return fx[ci] ? Object.assign({}, base, { left: lefts[ci] }) : base; }
    var anyFx = lastFx >= 0, scs = React.useState(false), scrolled = scs[0], setScrolled = scs[1];
    var headRows = [];
    if (p.groups) headRows.push(h('tr', { key: 'g' }, (p.selectable ? [h('th', { key: 'cbg', className: 'ds-table__cb' })] : []).concat(p.groups.map(function (g, i) { return h('th', { key: i, colSpan: g.span || 1, rowSpan: g.rowSpan || 1, className: g.span > 1 ? 'is-group' : al(g) }, g.label); }))));
    headRows.push(h('tr', { key: 'h' },
      p.selectable ? h('th', { key: 'cb', className: cx('ds-table__cb', anyFx && 'is-fixed') }, h(Checkbox, { size: 'xs', checked: all, indeterminate: some, onChange: function () { sv[1](all ? [] : rows.map(rid)); }, label: undefined })) : null,
      cols.filter(function (c) { return !c.hideHeader; }).map(function (c, ci) {
        return h('th', { key: c.key, scope: 'col', className: cx(al(c), fxCls(ci)), style: fxSty(ci, c.width ? { width: c.width, minWidth: c.width } : undefined) },
          h('span', { className: 'ds-table__th' }, c.icon ? h(Icon, { name: c.icon }) : null, c.legendColor ? h('span', { className: 'ds-legend-sq', style: { '--sq': c.legendColor } }) : null, c.label, c.tooltip ? h(Tooltip, { content: c.tooltip, position: 'bottom' }) : null));
      })));
    return h('div', { className: cx('ds-table-wrap', anyFx && 'has-fixed', scrolled && 'is-scrolled'), onScroll: anyFx ? function (ev) { var on = ev.currentTarget.scrollLeft > 0; if (on !== scrolled) setScrolled(on); } : undefined }, h('table', { className: cx('ds-table', p.header === 'main' ? 'ds-table--header-main' : 'ds-table--header-subtle', p.striped && 'ds-table--striped', p.className) },
      p.caption ? h('caption', { style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' } }, p.caption) : null,
      h('thead', null, headRows),
      h('tbody', null, rows.map(function (r, i) {
        var id = rid(r, i), on = sel.indexOf(id) >= 0;
        return h('tr', { key: i, className: cx(on && 'is-selected-primary', r._selected && ('is-selected' + (r._selected === true ? '' : '-' + r._selected))) },
          p.selectable ? h('td', { className: cx('ds-table__cb', anyFx && 'is-fixed') }, h(Checkbox, { size: 'xs', checked: on, onChange: function () { toggle(id); } })) : null,
          cols.map(function (c, ci) { return h('td', { key: c.key, className: cx(al(c), fxCls(ci)), style: fxSty(ci) }, c.render ? c.render(r[c.key], r) : r[c.key]); }));
      }))));
  }
  /* 표 셀 도우미(피그마 Cell/*) */
  function TableTitle(p) { return h('span', { className: 'ds-tcell-title' }, p.icon ? h(Icon, { name: p.icon }) : null, h('span', null, p.label ? h('span', { className: 'ds-tcell-title__label' }, p.label) : null, h('b', null, p.children))); }
  function TableNumber(p) { return h('span', { className: cx('ds-tcell-num', p.strong && 'is-strong', p.inline && 'is-inline') }, h('span', { className: 'ds-num' }, p.children), p.change ? h(ChangeBadge, { type: p.change.type }, p.change.value) : null); }
  /* TableRank — 순위(피그마 Table Text · Type=rank): 1~3위는 메달 아이콘(피그마 circle/1st · 2nd · 3rd) 20, 4위부터는 숫자 */
  var RANK_SVG = { 1: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint0_linear_9896_6785)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint1_linear_9896_6785)\"/> <path d=\"M12 19.68C16.2415 19.68 19.68 16.2416 19.68 12C19.68 7.75846 16.2415 4.32001 12 4.32001C7.75845 4.32001 4.32 7.75846 4.32 12C4.32 16.2416 7.75845 19.68 12 19.68Z\" fill=\"url(#paint2_linear_9896_6785)\"/> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint3_radial_9896_6785)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint4_radial_9896_6785)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint5_radial_9896_6785)\"/> <path d=\"M11.2653 15.9211V9.60802L10.6822 10.0606C10.2138 10.4245 9.54049 10.2824 9.24844 9.75822C9.00245 9.3157 9.11908 8.75324 9.51893 8.45185L11.1154 7.25031C11.3653 7.06181 11.6681 6.96001 11.9788 6.96001C12.7853 6.96001 13.44 7.63234 13.44 8.46294V15.9221C13.44 16.539 12.9529 17.04 12.3532 17.04C11.7524 17.039 11.2653 16.539 11.2653 15.9211Z\" fill=\"url(#paint6_linear_9896_6785)\"/> </g> <defs> <linearGradient id=\"paint0_linear_9896_6785\" x1=\"1.31682\" y1=\"-0.390566\" x2=\"19.9934\" y2=\"21.2711\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FFE16E\"/> <stop offset=\"0.352\" stop-color=\"#FFD226\"/> <stop offset=\"0.453\" stop-color=\"#FDCD23\"/> <stop offset=\"0.579\" stop-color=\"#F6BD1B\"/> <stop offset=\"0.663\" stop-color=\"#F0AF13\"/> <stop offset=\"1\" stop-color=\"#F08D13\"/> </linearGradient> <linearGradient id=\"paint1_linear_9896_6785\" x1=\"20.2764\" y1=\"20.2764\" x2=\"2.06421\" y2=\"2.06421\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FFE16E\"/> <stop offset=\"0.352\" stop-color=\"#FFD226\"/> <stop offset=\"0.453\" stop-color=\"#FDCD23\"/> <stop offset=\"0.579\" stop-color=\"#F6BD1B\"/> <stop offset=\"0.663\" stop-color=\"#F0AF13\"/> <stop offset=\"1\" stop-color=\"#F08D13\"/> </linearGradient> <linearGradient id=\"paint2_linear_9896_6785\" x1=\"5.43941\" y1=\"4.2246\" x2=\"18.4633\" y2=\"19.6602\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FFE787\"/> <stop offset=\"0.525\" stop-color=\"#FFE16E\"/> <stop offset=\"1\" stop-color=\"#F0BC13\"/> </linearGradient> <radialGradient id=\"paint3_radial_9896_6785\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(13.2418 13.3874) scale(15.6484)\"> <stop stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> <stop offset=\"0.725\" stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> <stop offset=\"0.83\" stop-color=\"#FFF3C2\"/> <stop offset=\"0.962\" stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint4_radial_9896_6785\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFE477\" stop-opacity=\"0\"/> <stop offset=\"0.725\" stop-color=\"#FFE477\" stop-opacity=\"0\"/> <stop offset=\"0.83\" stop-color=\"#FFEEAB\"/> <stop offset=\"0.962\" stop-color=\"#FFE477\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint5_radial_9896_6785\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> <stop offset=\"0.725\" stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> <stop offset=\"0.83\" stop-color=\"#FFF3C2\"/> <stop offset=\"0.962\" stop-color=\"#FFF3C2\" stop-opacity=\"0\"/> </radialGradient> <linearGradient id=\"paint6_linear_9896_6785\" x1=\"7.35596\" y1=\"2.12161\" x2=\"20.7613\" y2=\"17.6696\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FFE170\"/> <stop offset=\"0.352\" stop-color=\"#EBBB00\"/> <stop offset=\"0.49\" stop-color=\"#EEB10A\"/> <stop offset=\"0.581\" stop-color=\"#EDAA0B\"/> <stop offset=\"1\" stop-color=\"#D27400\"/> </linearGradient> <clipPath id=\"clip0_9896_6785\"> <rect width=\"20\" height=\"20\" fill=\"white\"/> </clipPath> </defs> </svg>", 2: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint0_linear_9896_6786)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint1_linear_9896_6786)\"/> <path d=\"M12 19.68C16.2416 19.68 19.68 16.2416 19.68 12C19.68 7.75846 16.2416 4.32001 12 4.32001C7.75846 4.32001 4.32001 7.75846 4.32001 12C4.32001 16.2416 7.75846 19.68 12 19.68Z\" fill=\"url(#paint2_linear_9896_6786)\"/> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint3_radial_9896_6786)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint4_radial_9896_6786)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint5_radial_9896_6786)\"/> <path d=\"M14.88 9.88847C14.88 11.6339 13.7295 12.6003 11.6767 15.1162H13.8309C14.3433 15.1162 14.7596 15.5473 14.7596 16.0781C14.7596 16.6088 14.3433 17.04 13.8309 17.04H10.5146C9.74438 17.04 9.12 16.3932 9.12 15.5955C9.12 15.2508 9.23938 14.9148 9.45702 14.6532C11.8172 11.8145 12.767 10.9981 12.767 9.91583C12.767 9.62802 12.71 8.87073 11.9598 8.87073C11.532 8.87073 11.2921 9.15307 11.159 9.47262C10.991 9.87643 10.5801 10.1128 10.1575 10.0712C9.48554 10.0067 9.04182 9.27673 9.32073 8.64092C9.69895 7.77967 10.467 6.96001 12.0254 6.96001C14.3095 6.96001 14.88 8.73065 14.88 9.88847Z\" fill=\"url(#paint6_linear_9896_6786)\"/> </g> <defs> <linearGradient id=\"paint0_linear_9896_6786\" x1=\"-0.22034\" y1=\"-4.19603\" x2=\"20.5277\" y2=\"23.3015\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#F6FCFE\"/> <stop offset=\"0.352\" stop-color=\"#D1DFF5\"/> <stop offset=\"0.434\" stop-color=\"#CDDBF0\"/> <stop offset=\"0.535\" stop-color=\"#C3CFE0\"/> <stop offset=\"0.648\" stop-color=\"#B2BBC7\"/> <stop offset=\"0.663\" stop-color=\"#AFB8C3\"/> <stop offset=\"1\" stop-color=\"#717476\"/> </linearGradient> <linearGradient id=\"paint1_linear_9896_6786\" x1=\"1.86026\" y1=\"-1.43897\" x2=\"20.0858\" y2=\"22.7166\" gradientUnits=\"userSpaceOnUse\"> <stop offset=\"0.104\" stop-color=\"#717476\"/> <stop offset=\"0.385\" stop-color=\"#AFB8C3\"/> <stop offset=\"0.401\" stop-color=\"#B2BBC7\"/> <stop offset=\"0.516\" stop-color=\"#C3CFE0\"/> <stop offset=\"0.622\" stop-color=\"#CDDBF0\"/> <stop offset=\"0.706\" stop-color=\"#D1DFF5\"/> <stop offset=\"1\" stop-color=\"#F6FCFE\"/> </linearGradient> <linearGradient id=\"paint2_linear_9896_6786\" x1=\"6.9688\" y1=\"6.33589\" x2=\"18.3566\" y2=\"19.1567\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#F6FCFE\"/> <stop offset=\"0.5\" stop-color=\"#D1DFF5\"/> <stop offset=\"0.593\" stop-color=\"#CDDBF0\"/> <stop offset=\"0.709\" stop-color=\"#C2CEE0\"/> <stop offset=\"0.837\" stop-color=\"#AFB9C7\"/> <stop offset=\"0.974\" stop-color=\"#959CA4\"/> <stop offset=\"0.989\" stop-color=\"#92989F\"/> </linearGradient> <radialGradient id=\"paint3_radial_9896_6786\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(13.2418 13.3874) scale(15.6484)\"> <stop stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.756\" stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"white\"/> <stop offset=\"0.94\" stop-color=\"white\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint4_radial_9896_6786\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.756\" stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"white\"/> <stop offset=\"0.94\" stop-color=\"white\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint5_radial_9896_6786\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.756\" stop-color=\"#FFFBE9\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"white\"/> <stop offset=\"0.94\" stop-color=\"white\" stop-opacity=\"0\"/> </radialGradient> <linearGradient id=\"paint6_linear_9896_6786\" x1=\"2.98538\" y1=\"-1.91929\" x2=\"20.0042\" y2=\"13.0884\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#F6FCFE\"/> <stop offset=\"0.524\" stop-color=\"#99A6B5\"/> <stop offset=\"0.631\" stop-color=\"#8795A6\"/> <stop offset=\"0.842\" stop-color=\"#656F7C\"/> <stop offset=\"1\" stop-color=\"#4E5A67\"/> </linearGradient> <clipPath id=\"clip0_9896_6786\"> <rect width=\"20\" height=\"20\" fill=\"white\"/> </clipPath> </defs> </svg>", 3: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint0_linear_9896_6787)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint1_linear_9896_6787)\"/> <path d=\"M12 19.68C16.2416 19.68 19.68 16.2416 19.68 12C19.68 7.75846 16.2416 4.32001 12 4.32001C7.75846 4.32001 4.32001 7.75846 4.32001 12C4.32001 16.2416 7.75846 19.68 12 19.68Z\" fill=\"url(#paint2_linear_9896_6787)\"/> <path d=\"M12 23.28C18.2298 23.28 23.28 18.2298 23.28 12C23.28 5.77023 18.2298 0.720001 12 0.720001C5.77023 0.720001 0.720001 5.77023 0.720001 12C0.720001 18.2298 5.77023 23.28 12 23.28Z\" fill=\"url(#paint3_radial_9896_6787)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint4_radial_9896_6787)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint5_radial_9896_6787)\"/> <path d=\"M12 21.36C17.1694 21.36 21.36 17.1694 21.36 12C21.36 6.83061 17.1694 2.64 12 2.64C6.83061 2.64 2.64 6.83061 2.64 12C2.64 17.1694 6.83061 21.36 12 21.36Z\" fill=\"url(#paint6_linear_9896_6787)\"/> <path d=\"M14.88 14.007C14.88 16.1845 13.2907 17.04 11.8828 17.04C10.5552 17.04 9.7574 16.4825 9.29727 15.8285C8.89941 15.2657 9.20651 14.4691 9.86715 14.2975C10.2766 14.1914 10.6903 14.3737 10.933 14.7242C11.0998 14.9644 11.3636 15.1681 11.7889 15.1681C12.611 15.1681 12.7968 14.3061 12.7968 13.9116C12.7968 13.0314 12.249 12.6819 11.4934 12.6819H11.4765C11.0386 12.6819 10.684 12.3216 10.684 11.8767C10.684 11.4318 11.0386 11.0716 11.4765 11.0716H11.5472C11.9061 11.0716 12.6638 10.945 12.6638 9.85471C12.6638 9.58239 12.5551 8.83084 11.7889 8.83084C11.4597 8.83084 11.2454 8.9938 11.1051 9.19C10.8856 9.49555 10.5267 9.66173 10.1658 9.5706L10.0434 9.53951C9.45135 9.39049 9.17169 8.68182 9.52311 8.17578C9.94419 7.56789 10.6808 6.96001 11.9377 6.96001C13.526 6.96001 14.6932 8.01497 14.6932 9.58347C14.6932 10.9107 13.9872 11.6151 13.3899 11.7813V11.8231C13.9006 11.9357 14.88 12.58 14.88 14.007Z\" fill=\"url(#paint7_linear_9896_6787)\"/> </g> <defs> <linearGradient id=\"paint0_linear_9896_6787\" x1=\"-0.220341\" y1=\"-4.19603\" x2=\"20.4016\" y2=\"23.1354\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FDDCCB\"/> <stop offset=\"0.3\" stop-color=\"#F1994E\"/> <stop offset=\"0.369\" stop-color=\"#EC9449\"/> <stop offset=\"0.454\" stop-color=\"#DF843D\"/> <stop offset=\"0.549\" stop-color=\"#CA6B27\"/> <stop offset=\"0.6\" stop-color=\"#BB5A19\"/> <stop offset=\"0.726\" stop-color=\"#AA4D13\"/> <stop offset=\"0.976\" stop-color=\"#7E2C02\"/> <stop offset=\"1\" stop-color=\"#792900\"/> </linearGradient> <linearGradient id=\"paint1_linear_9896_6787\" x1=\"18.9888\" y1=\"22.9226\" x2=\"4.43433\" y2=\"0.176137\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FDDCCB\"/> <stop offset=\"0.3\" stop-color=\"#F1994E\"/> <stop offset=\"0.369\" stop-color=\"#EC9449\"/> <stop offset=\"0.454\" stop-color=\"#DF843D\"/> <stop offset=\"0.549\" stop-color=\"#CA6B27\"/> <stop offset=\"0.6\" stop-color=\"#BB5A19\"/> <stop offset=\"0.726\" stop-color=\"#AA4D13\"/> <stop offset=\"0.976\" stop-color=\"#7E2C02\"/> <stop offset=\"1\" stop-color=\"#792900\"/> </linearGradient> <linearGradient id=\"paint2_linear_9896_6787\" x1=\"6.72131\" y1=\"6.76287\" x2=\"21.7951\" y2=\"21.7167\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FDDCCB\"/> <stop offset=\"0.3\" stop-color=\"#F1994E\"/> <stop offset=\"0.394\" stop-color=\"#EC9449\"/> <stop offset=\"0.512\" stop-color=\"#DF843D\"/> <stop offset=\"0.641\" stop-color=\"#CA6B27\"/> <stop offset=\"0.712\" stop-color=\"#BB5A19\"/> <stop offset=\"0.803\" stop-color=\"#AA4D13\"/> <stop offset=\"0.983\" stop-color=\"#7E2C02\"/> <stop offset=\"1\" stop-color=\"#792900\"/> </linearGradient> <radialGradient id=\"paint3_radial_9896_6787\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(13.2418 13.3874) scale(15.6484)\"> <stop stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.733\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"#FFEEE0\"/> <stop offset=\"0.928\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint4_radial_9896_6787\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.733\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"#FFEEE0\"/> <stop offset=\"0.928\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> </radialGradient> <radialGradient id=\"paint5_radial_9896_6787\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.4161 10.1047) scale(14.0941)\"> <stop stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.733\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> <stop offset=\"0.843\" stop-color=\"#FFEEE0\"/> <stop offset=\"0.928\" stop-color=\"#FFD1AD\" stop-opacity=\"0\"/> </radialGradient> <linearGradient id=\"paint6_linear_9896_6787\" x1=\"20.0977\" y1=\"22.1315\" x2=\"3.32549\" y2=\"0.967203\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FDDCCB\"/> <stop offset=\"0.3\" stop-color=\"#F1994E\"/> <stop offset=\"0.369\" stop-color=\"#EC9449\"/> <stop offset=\"0.454\" stop-color=\"#DF843D\"/> <stop offset=\"0.549\" stop-color=\"#CA6B27\"/> <stop offset=\"0.6\" stop-color=\"#BB5A19\"/> <stop offset=\"0.726\" stop-color=\"#AA4D13\"/> <stop offset=\"0.976\" stop-color=\"#7E2C02\"/> <stop offset=\"1\" stop-color=\"#792900\"/> </linearGradient> <linearGradient id=\"paint7_linear_9896_6787\" x1=\"2.58162\" y1=\"-1.07135\" x2=\"26.8691\" y2=\"20.4706\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FDDCCB\"/> <stop offset=\"0.249\" stop-color=\"#F1994E\"/> <stop offset=\"0.302\" stop-color=\"#EC9449\"/> <stop offset=\"0.367\" stop-color=\"#DF843D\"/> <stop offset=\"0.439\" stop-color=\"#CA6B27\"/> <stop offset=\"0.478\" stop-color=\"#BB5A19\"/> <stop offset=\"0.511\" stop-color=\"#B45516\"/> <stop offset=\"0.681\" stop-color=\"#943D0A\"/> <stop offset=\"0.824\" stop-color=\"#802E03\"/> <stop offset=\"0.922\" stop-color=\"#792900\"/> </linearGradient> <clipPath id=\"clip0_9896_6787\"> <rect width=\"20\" height=\"20\" fill=\"white\"/> </clipPath> </defs> </svg>" };
  function TableRank(p) { var n = Number(p.rank); return RANK_SVG[n] ? h('span', { className: 'ds-tcell-medal', role: 'img', 'aria-label': n + '위', dangerouslySetInnerHTML: { __html: RANK_SVG[n] } }) : h('span', { className: 'ds-tcell-rank ds-num' }, n); }
  function TableBar(p) {
    var segs = (p.segments || [{ value: p.value }]).map(function (s, i) { return Object.assign({ color: i === 0 ? 'var(--fill-primary-main)' : 'var(--chart-series-' + (i + 1) + ')', text: i === 0 ? 'var(--text-primary-main)' : 'var(--chart-series-' + (i + 1) + ')' }, s); });
    var tot = p.max || segs.reduce(function (a, s) { return a + s.value; }, 0) || 100;
    return h('span', { className: cx('ds-tcell-bar', segs.length > 1 && 'is-comp', p.inline && 'is-inline', p.quiet && 'is-quiet') },
      h('span', { className: 'ds-tcell-bar__track' }, segs.map(function (s, i) { return h('span', { key: i, style: { width: (s.value / tot * 100) + '%', background: s.color } }); })),
      h('span', { className: 'ds-tcell-bar__text ds-num' }, segs.map(function (s, i) { return h('b', { key: i, style: { color: s.text || s.color } }, (p.percent === false ? s.value : Math.round(s.value / (p.max || tot) * 100) + '%')); }), p.label && segs.length === 1 ? h('span', null, p.label) : null));
  }
  function TableActions(p) { var acts = p.actions || []; return h('span', { className: 'ds-tcell-actions' }, acts.map(function (a, i) { return h(IconButton, { key: i, icon: a.icon, label: a.label, size: '3xs', color: 'neutral-subtle', onClick: a.onClick }); }), p.overflow !== false ? h(IconButton, { icon: 'more-2', label: '더보기', size: '3xs', color: 'neutral-subtle', onClick: p.onOverflow }) : null); }


  /* MinimalTable — 모바일 표. 헤더 항상 흰색(table-header-main), 구분선 없음 */
  /* MinimalTable — 카드 안 요약 표(피그마 Minimal Table). columns[{key,label,numeric,legendColor,deltaKey,render,icon,tooltip}] · rows · rowHeader(첫 열을 행 머리로) · fixedFirst */
  function MinimalTable(p) {
    var cols = p.columns || [];
    return h('div', { className: cx('ds-table-wrap', p.fixedFirst && 'has-fixed') }, h('table', { className: 'ds-mtable' },
      h('thead', null, h('tr', null, cols.map(function (c, ci) {
        return h('th', { key: c.key, scope: 'col', className: cx(c.numeric && 'is-right', p.fixedFirst && ci === 0 && 'is-fixed') }, h('span', { className: 'ds-table__th' }, c.icon ? h(Icon, { name: c.icon }) : null, c.legendColor ? h('span', { className: 'ds-legend-sq', style: { '--sq': c.legendColor } }) : null, c.label, c.tooltip ? h(Tooltip, { content: c.tooltip, position: 'bottom' }) : null));
      }))),
      h('tbody', null, (p.rows || []).map(function (r, i) {
        return h('tr', { key: i }, cols.map(function (c, ci) {
          var v = r[c.key], d = c.deltaKey && r[c.deltaKey], Tag = p.rowHeader && ci === 0 ? 'th' : 'td';
          return h(Tag, { key: c.key, scope: Tag === 'th' ? 'row' : undefined, className: cx(c.numeric && 'is-right', d && 'is-metric', p.fixedFirst && ci === 0 && 'is-fixed') },
            d ? h('span', { className: 'ds-mtable__metric' }, h('span', { className: 'ds-num' }, c.render ? c.render(v, r) : v), h(ChangeBadge, { type: d.type }, d.value)) : (c.render ? c.render(v, r) : v));
        }));
      }))));
  }


  /* 차트 시리즈 색 — 임시 순서(확정 전). Primitive 직접 사용 예외 */
  var SERIES = ['var(--chart-series-1)', 'var(--chart-series-2)', 'var(--chart-series-3)', 'var(--chart-series-4)', 'var(--chart-series-5)', 'var(--chart-series-6)'];  /* 피그마 semantic/chart/series-1~6 */
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


  /* LineChart — categories + series · 2px 선 + 끝점 */


  /* DonutChart — items[{name,value,color?}] · 가운데 합계 */

  DonutChart.series = SERIES;

  /* GlobalNav — 높이 56 · surface-main · 좌우 48. width: fill|default(1180)|wide(1440) · tabStyle: ghost|underline · align: left|center */
  /* GlobalNav — GNB. items[{value,label,menu:[{heading,items:[{value,label,description,disabled}]}]}] · value · onChange · tabStyle ghost|underline · align · width · logo · right
     2depth 메뉴(피그마 Navigation/SubMenu Group): 메뉴에 마우스를 올리면 열리고, 누르면 고정, 바깥 클릭 · Esc로 닫힘. 하위 항목을 고르면 onChange(하위 값) 후 닫힘 */
  function GlobalNav(p) {
    var items = p.items || [], w = p.width || 'fill', ref = React.useRef(null);
    var os = React.useState(-1), open = os[0], setOpen = os[1], ps = React.useState(false), pinned = ps[0], setPinned = ps[1];
    var timer = React.useRef(null);
    React.useEffect(function () {
      if (!pinned) return;
      function down(e) { if (ref.current && !ref.current.contains(e.target)) { setPinned(false); setOpen(-1); } }
      function key(e) { if (e.key === 'Escape') { setPinned(false); setOpen(-1); } }
      document.addEventListener('mousedown', down); document.addEventListener('keydown', key);
      return function () { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key); };
    }, [pinned]);
    var hold = React.useRef(false);  /* 하위 항목을 고른 뒤에는 마우스가 메뉴를 벗어날 때까지 다시 열지 않음 */
    function enter(i) { clearTimeout(timer.current); if (!pinned && !hold.current) setOpen(i); }
    function leave() { hold.current = false; if (pinned) return; timer.current = setTimeout(function () { setOpen(-1); }, 120); }
    function pick(v) { hold.current = true; setTimeout(function () { hold.current = false; }, 400); clearTimeout(timer.current); setPinned(false); setOpen(-1); p.onChange && p.onChange(v); }
    var hasSub = function (it) { return (it.menu || it.children) && (it.menu || it.children).length; };
    return h('header', { ref: ref, className: cx('ds-gnb', 'ds-gnb--' + (p.tabStyle || 'ghost'), p.className) },
      h('div', { className: cx('ds-gnb__inner', 'ds-gnb__inner--' + w) },
        h('div', { className: 'ds-gnb__left' }, p.logo || null),
        h('nav', { className: cx('ds-gnb__menu', p.align === 'center' && 'ds-gnb__menu--center') },
          items.map(function (it, i) {
            var v = it.value != null ? it.value : it.label, groups = it.menu || (it.children ? [{ items: it.children }] : null);
            var sub = groups ? groups.some(function (g) { return (g.items || []).some(function (x) { return (x.value != null ? x.value : x.label) === p.value; }); }) : false;
            var on = v === p.value || sub, isOpen = open === i && groups;
            return h('div', { key: i, className: 'ds-gnb__slot', onMouseEnter: function () { if (groups) enter(i); }, onMouseLeave: function () { if (groups) leave(); } },
              h('button', { type: 'button', 'aria-current': on ? 'page' : undefined, 'aria-expanded': groups ? !!isOpen : undefined, 'aria-haspopup': groups ? 'menu' : undefined,
                className: cx('ds-gnb__item', on && 'is-active', isOpen && 'is-open', it.state && 'is-' + it.state),
                onClick: function () { if (groups) { if (pinned && open === i) { setPinned(false); setOpen(-1); } else { setOpen(i); setPinned(true); } } else pick(v); } },
                h('span', null, it.label), groups || it.hasMenu ? h(Icon, { name: 'chevron-down', size: 16, className: 'ds-gnb__caret' }) : null),
              isOpen ? h('div', { className: 'ds-gnb__sub', role: 'menu' }, groups.map(function (g, gi) {
                return h('div', { key: gi, className: 'ds-gnb__group' },
                  g.heading ? h('div', { className: 'ds-gnb__heading' }, g.heading) : null,
                  (g.items || []).map(function (x, xi) {
                    var xv = x.value != null ? x.value : x.label, xon = xv === p.value;
                    return h('button', { key: xi, type: 'button', role: 'menuitem', disabled: !!x.disabled, className: cx('ds-gnb__subitem', xon && 'is-active'), onClick: function () { pick(xv); } },
                      h('span', { className: 'ds-gnb__subname' }, x.label), x.description ? h('span', { className: 'ds-gnb__subdesc' }, x.description) : null);
                  }));
              })) : null);
          })),
        h('div', { className: 'ds-gnb__right' }, p.right || null)));
  }


  /* 제목 옆 도움말(?) — Tooltip + question 16 */
  function HeadTip(p) { return p.tip ? h('span', { className: 'ds-head__tip' }, h(Tooltip, { content: p.tip, position: 'bottom' })) : null; }
  function crumbs(c) { return c && c.length ? h(Breadcrumb, { items: c.map(function (x) { return typeof x === 'string' ? { label: x } : x; }) }) : null; }

  /* PageHeader — 페이지 제목(피그마 Page Header Wide · Narrow · Centered).
     layout: wide(기본)|narrow|centered · type: simple|background · background: light|dark · titleSize: lg|xl|2xl|3xl
     breadcrumb[] · smallTitle(centered 부제목) · title · tooltip · description · actions(오른쪽, narrow는 아래) · children(콘텐츠 슬롯) · divider */
  function PageHeader(p) {
    var lay = p.layout || 'wide', size = p.titleSize || (lay === 'narrow' ? 'xl' : '2xl');
    var titles = h('div', { className: 'ds-head__titles' },
      p.smallTitle ? h('p', { className: 'ds-head__sub' }, p.smallTitle) : null,
      h('h1', { className: cx('ds-head__title', 'ds-head__title--' + size, 'ds-head__title--bold') }, h('span', null, p.title), h(HeadTip, { tip: p.tooltip })),
      p.description ? h('p', { className: 'ds-head__desc' }, p.description) : null);
    return h('header', { className: cx('ds-phead', 'ds-phead--' + lay, p.type === 'background' && 'ds-phead--bg', p.background === 'dark' && 'ds-head--dark', p.className) },
      h('div', { className: 'ds-phead__wrap' }, crumbs(p.breadcrumb),
        h('div', { className: 'ds-phead__row' }, titles, p.actions ? h('div', { className: 'ds-phead__actions' }, p.actions) : null)),
      p.children ? h('div', { className: 'ds-phead__content' }, p.children) : null,
      p.divider && p.type !== 'background' ? h('div', { className: 'ds-head__divider' }) : null);
  }

  /* SectionHeader — 섹션 제목(피그마 Section Header Wide · Narrow). type: simple|supporting-box · titleSize: sm|md|base|lg|xl|2xl|3xl
     smallTitle · title · meta(제목 옆 기준일 등) · tooltip · action(제목 옆 버튼) · right(오른쪽 슬롯) · description · divider · narrow */
  function SectionHeader(p) {
    var size = p.titleSize || (p.narrow ? 'base' : 'xl'), box = p.type === 'supporting-box';
    var desc = p.description ? (box ? h('div', { className: 'ds-shead__box' }, p.description) : h('p', { className: 'ds-head__desc' }, p.description)) : null;
    return h('div', { className: cx('ds-shead', p.narrow && 'ds-shead--narrow', box && 'ds-shead--box', p.background === 'dark' && 'ds-head--dark', p.className) },
      h('div', { className: 'ds-shead__wrap' },
        h('div', { className: 'ds-head__titles' },
          p.smallTitle ? h('p', { className: 'ds-head__sub' }, p.smallTitle) : null,
          h('div', { className: 'ds-shead__row' },
            h('h2', { className: cx('ds-head__title', 'ds-head__title--' + size) }, h('span', null, p.title), h(HeadTip, { tip: p.tooltip })),
            p.meta ? h('span', { className: 'ds-shead__meta ds-num' }, p.meta) : null,
            p.action || null,
            p.right ? h('div', { className: 'ds-shead__right' }, p.right) : null)),
        desc),
      p.divider ? h('div', { className: 'ds-head__divider' }) : null);
  }

  /* ContentsHeader — 콘텐츠 블록 · 카드 제목(피그마 Contents Header · Contents Header Bullet). type: contents|card · titleSize: sm|md|base|lg|xl|2xl
     icon(왼쪽 아이콘) · bullet · badge · title · tooltip · description · right(버튼 · Select · 텍스트 버튼 · Segment 등) · onMore(⋮ 버튼) · divider */
  function ContentsHeader(p) {
    var size = p.titleSize || (p.type === 'card' ? 'md' : 'lg'), small = size === 'sm' || size === 'md' || size === 'base';
    return h('div', { className: cx('ds-conth', p.type === 'card' && 'ds-conth--card', p.className) },
      h('div', { className: 'ds-conth__wrap' },
        h('div', { className: 'ds-conth__row' },
          h('div', { className: cx('ds-head__title', 'ds-head__title--' + size, 'ds-conth__title') },
            p.bullet ? h('span', { className: 'ds-conth__bullet', 'aria-hidden': true }) : null,
            p.icon ? h(Icon, { name: p.icon, className: 'ds-conth__icon' }) : null,
            h('span', null, p.title), p.badge ? h(CategoryBadge, { color: 'white', border: true }, p.badge) : null, h(HeadTip, { tip: p.tooltip })),
          p.right ? h('div', { className: 'ds-conth__right' }, p.right) : null,
          p.onMore ? h(IconButton, { icon: 'more-2', label: '더보기', size: small ? 'sm' : 'md', onClick: p.onMore }) : null),
        p.description ? h('p', { className: 'ds-conth__desc' }, p.description) : null),
      p.divider ? h('div', { className: 'ds-head__divider' }) : null);
  }


  /* SearchField — 돋보기 아이콘이 붙은 검색 입력창. variant: line|soft|inverse · size: md|lg|xl|2xl · 값이 있으면 지우기 버튼 */
  function SearchField(p) {
    var size = p.size || 'lg', filled = p.value != null && p.value !== '';
    var o = rest(p, ['variant', 'size', 'state', 'onClear', 'className', 'width', 'button', 'onSearch', 'label']);
    o.type = 'search'; o.placeholder = p.placeholder || '검색어를 입력해주세요';
    if (p.value !== undefined && !p.onChange) o.onChange = function () {};
    if (p.onSearch) o.onKeyDown = function (e) { if (e.key === 'Enter') p.onSearch(e.target.value); };
    var box = h('label', { className: cx(inputCls(Object.assign({}, p, { size: size }), 'ds-search'), filled && 'is-filled'), style: p.width ? { width: p.width } : undefined },
      h(Icon, { name: 'search' }), h('input', o),
      filled && p.onClear ? h('button', { type: 'button', className: 'ds-search__clear', 'aria-label': '지우기', onClick: p.onClear }, h(Icon, { name: 'close' })) : null);
    var withBtn = !p.button ? box : h('div', { className: 'ds-row ds-search-row' }, box, h(Button, { color: 'neutral', variant: 'base', size: size === '2xl' ? '2xl' : size, onClick: function () { p.onSearch && p.onSearch(p.value); } }, p.button === true ? '검색' : p.button));
    if (p.label) return h('div', { className: 'ds-field', style: p.width ? { width: p.width } : undefined }, h(InputLabel, { size: 'xs' }, p.label), withBtn);
    return withBtn;
    return h('div', { className: 'ds-row ds-search-row' }, box, h(Button, { color: 'neutral', variant: 'base', size: size === '2xl' ? '2xl' : size, onClick: function () { p.onSearch && p.onSearch(p.value); } }, p.button === true ? '검색' : p.button));
  }

  var WEEK = ['일', '월', '화', '수', '목', '금', '토'];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDate(d) { return d ? d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일' : null; }
  function sameDay(a, b) { return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

  /* Calendar — 달력 판(드롭다운 elevation-3). month(Date) · value(Date) · range[from,to] · onChange · onMonth */
  function Calendar(p) {
    var m = p.month || p.value || new Date(), y = m.getFullYear(), mo = m.getMonth();
    var vs = React.useState('day'), view = vs[0], setView = vs[1];
    var first = new Date(y, mo, 1).getDay(), days = new Date(y, mo + 1, 0).getDate(), cells = [];
    for (var i = 0; i < first; i++) cells.push(null);
    for (var d = 1; d <= days; d++) cells.push(new Date(y, mo, d));
    var r = p.range || [], today = p.today || null;
    var move = function (n) { p.onMonth && p.onMonth(view === 'day' ? new Date(y, mo + n, 1) : view === 'month' ? new Date(y + n, mo, 1) : new Date(y + n * 12, mo, 1)); };
    var y0 = Math.floor(y / 12) * 12;
    var title = view === 'day' ? y + '년 ' + (mo + 1) + '월' : view === 'month' ? y + '년' : y0 + ' – ' + (y0 + 11);
    var body;
    if (view === 'month') body = h('div', { className: 'ds-cal__mgrid' }, Array.apply(null, Array(12)).map(function (_, k) {
      var on = p.value && p.value.getFullYear() === y && p.value.getMonth() === k;
      return h('button', { key: k, type: 'button', className: cx('ds-cal__mcell', on && 'is-selected'), onClick: function () { p.onMonth && p.onMonth(new Date(y, k, 1)); setView('day'); } }, h('span', null, (k + 1) + '월'));
    }));
    else if (view === 'year') body = h('div', { className: 'ds-cal__mgrid' }, Array.apply(null, Array(12)).map(function (_, k) {
      var yy = y0 + k, on = p.value && p.value.getFullYear() === yy;
      return h('button', { key: k, type: 'button', className: cx('ds-cal__mcell', on && 'is-selected'), onClick: function () { p.onMonth && p.onMonth(new Date(yy, mo, 1)); setView('month'); } }, h('span', null, yy));
    }));
    else body = h('div', { className: 'ds-cal__grid' },
        WEEK.map(function (w, i) { return h('span', { key: 'w' + i, className: cx('ds-cal__wd', i === 0 && 'is-sun', i === 6 && 'is-sat') }, w); }),
        cells.map(function (c, i) {
          if (!c) return h('span', { key: i });
          var sel = sameDay(c, p.value) || sameDay(c, r[0]) || sameDay(c, r[1]);
          var inRange = r[0] && r[1] && c > r[0] && c < r[1];
          var both = r[0] && r[1] && !sameDay(r[0], r[1]);
          return h('button', { key: i, type: 'button', className: cx('ds-cal__day', sel && 'is-selected', inRange && 'is-range', both && sameDay(c, r[0]) && 'is-range-start', both && sameDay(c, r[1]) && 'is-range-end', sameDay(c, today) && 'is-today', c.getDay() === 0 && 'is-sun', c.getDay() === 6 && 'is-sat'), 'aria-pressed': sel, onClick: function () { p.onChange && p.onChange(c); } }, h('span', null, c.getDate()));
        }));
    return h('div', { className: 'ds-cal', role: 'dialog', 'aria-label': title },
      h('div', { className: 'ds-cal__head' },
        h(IconButton, { icon: 'chevron-right', label: '이전', size: 'sm', className: 'ds-cal__prev', onClick: function () { move(-1); } }),
        h('button', { type: 'button', className: 'ds-cal__title ds-cal__titlebtn', onClick: function () { setView(view === 'day' ? 'month' : view === 'month' ? 'year' : 'day'); } }, title, h(Icon, { name: 'chevron-down', size: 16 })),
        h(IconButton, { icon: 'chevron-right', label: '다음', size: 'sm', onClick: function () { move(1); } })),
      body);
  }


  /* DatePicker — 날짜 버튼(Neutral base 버튼과 같은 판) + 달력. size: sm|md|lg|xl|2xl · suffix('부터') · open · onToggle */
  function DatePicker(p) {
    var uv = useValue(p); p = Object.assign({}, p, { value: uv[0], onChange: uv[1] });
    var pop = usePopup(p);
    var size = p.size || 'xl', dis = p.state === 'disabled';
    var label = p.options ? ((p.options.filter(function (o) { return o.value === p.value; })[0] || {}).label) : (p.value ? fmtDate(p.value) : null);
    var panel = !pop.open ? null : p.options
      ? h('div', { className: 'ds-menu ds-dp__list', role: 'listbox' }, p.options.map(function (o, i) { var on = o.value === p.value; return h('div', { key: i, role: 'option', 'aria-selected': on, className: cx('ds-menu__item', on && 'is-active'), onClick: function () { p.onChange && p.onChange(o.value); if (!pop.controlled) pop.close(); } }, o.label); }))
      : h(Calendar, { value: p.value, month: p.month, today: p.today, range: p.range, onChange: function (d) { p.onChange && p.onChange(d); if (!pop.controlled) pop.close(); }, onMonth: p.onMonth });
    return h('div', { ref: pop.ref, className: 'ds-dp' },
      h('button', { type: 'button', disabled: dis, className: cx('ds-dp__btn', 'ds-dp__btn--' + size, stateCls(p.state), !label && 'is-empty'), onClick: pop.toggle, 'aria-expanded': pop.open },
        h('span', { className: 'ds-dp__layer' },
          h(Icon, { name: 'calendar' }),
          h('span', { className: 'ds-dp__text ds-num' }, label || (p.placeholder || '날짜 선택')),
          p.suffix ? h('span', { className: 'ds-dp__suffix' }, p.suffix) : null)),
      panel ? h('div', { className: 'ds-dp__panel' }, panel) : null);
  }

  /* DatePickerInline — 테두리 없는 글자형 날짜 선택(피그마 DatePicker/Inline). 필터 줄 · 카드 헤더. size: sm|md|lg|xl|2xl · 나머지는 DatePicker와 같음 */
  function DatePickerInline(p) {
    var uv = useValue(p); p = Object.assign({}, p, { value: uv[0], onChange: uv[1] });
    var pop = usePopup(p);
    var size = p.size || 'md', dis = p.state === 'disabled';
    return h('div', { ref: pop.ref, className: 'ds-dp' },
      h('button', { type: 'button', disabled: dis, className: cx('ds-dpi', 'ds-dpi--' + size, stateCls(p.state), !p.value && 'is-empty'), onClick: pop.toggle, 'aria-expanded': pop.open },
        h(Icon, { name: 'calendar' }), h('span', { className: 'ds-dp__text ds-num' }, p.value ? fmtDate(p.value) : (p.placeholder || '날짜 선택')), h(Icon, { name: 'chevron-down', className: 'ds-dpi__arrow' })),
      pop.open ? h('div', { className: 'ds-dp__panel' }, h(Calendar, { value: p.value, month: p.month, today: p.today, onChange: function (d) { p.onChange && p.onChange(d); if (!pop.controlled) pop.close(); }, onMonth: p.onMonth })) : null);
  }

  /* DateInput — 입력창 모양의 날짜 선택(피그마 Input Date Picker). label · 오른쪽 달력 아이콘 · type: card(달력)|select(목록, options) · helper */
  function DateInput(p) {
    var uv = useValue(p); p = Object.assign({}, p, { value: uv[0], onChange: uv[1] });
    var pop = usePopup(p);
    var size = p.size || 'xl', dis = p.state === 'disabled', open = pop.open;
    var label = p.options ? ((p.options.filter(function (o) { return o.value === p.value; })[0] || {}).label) : (p.value ? (p.format === 'month' ? p.value.getFullYear() + '년 ' + (p.value.getMonth() + 1) + '월' : fmtDate(p.value)) : null);
    var field = h('button', { type: 'button', disabled: dis, onClick: pop.toggle, 'aria-expanded': pop.open, className: cx(inputCls({ variant: p.variant || 'line', size: size, shape: p.shape, state: dis ? 'disabled' : (pop.open ? 'focus' : p.state), negative: p.negative }), 'ds-dinput', label && 'is-filled') },
      h('span', { className: cx('ds-input__value', !label && 'is-placeholder') }, label || p.placeholder || '날짜 선택'), h(Icon, { name: 'calendar' }));
    var panel = !open ? null : p.options
      ? h('div', { className: 'ds-menu ds-dp__list', role: 'listbox' }, p.options.map(function (o, i) { var on = o.value === p.value; return h('div', { key: i, role: 'option', 'aria-selected': on, className: cx('ds-menu__item', on && 'is-active'), onClick: function () { p.onChange && p.onChange(o.value); if (!pop.controlled) pop.close(); } }, o.label); }))
      : h(Calendar, { value: p.value, month: p.month, today: p.today, onChange: function (d) { p.onChange && p.onChange(d); if (!pop.controlled) pop.close(); }, onMonth: p.onMonth });
    return h('div', { ref: pop.ref, className: 'ds-dp ds-dinput-wrap', style: p.width ? { width: p.width } : undefined },
      p.label ? h(InputLabel, { size: size === '2xl' ? 'sm' : 'xs' }, p.label) : null,
      h('div', { className: 'ds-dinput__anchor' }, field, panel ? h('div', { className: 'ds-dp__panel' }, panel) : null),
      p.helper ? h('span', { className: 'ds-field__help' }, p.helper) : null);
  }


  /* Tooltip — 물음표 아이콘 + 설명 말풍선(흰 판 · elevation-3). position: top|bottom|left|right · open(고정 표시) · title
     말풍선은 body에 띄워(position: fixed) 부모 판의 overflow · 모서리에 잘리지 않는다 */
  function Tooltip(p) {
    var s = React.useState(false), hov = s[0], setHov = s[1], show = p.open != null ? p.open : hov;  /* variant: border(흰 판, 기본)|solid(어두운 판) */
    var ref = React.useRef(null), r = React.useState(null), rect = r[0], setRect = r[1];
    var pos = p.position || 'top';
    React.useLayoutEffect(function () {
      if (!show || !ref.current) return;
      function upd() { var b = ref.current.getBoundingClientRect(); setRect({ l: b.left, t: b.top, w: b.width, h: b.height }); }
      upd(); window.addEventListener('scroll', upd, true); window.addEventListener('resize', upd);
      return function () { window.removeEventListener('scroll', upd, true); window.removeEventListener('resize', upd); };
    }, [show]);
    var gap = 10, st = null;
    if (rect) {
      if (pos === 'top') st = { left: rect.l + rect.w / 2, top: rect.t - gap, transform: 'translate(-50%, -100%)' };
      else if (pos === 'bottom') st = { left: rect.l + rect.w / 2, top: rect.t + rect.h + gap, transform: 'translateX(-50%)' };
      else if (pos === 'right') st = { left: rect.l + rect.w + gap, top: rect.t + rect.h / 2, transform: 'translateY(-50%)' };
      else st = { left: rect.l - gap, top: rect.t + rect.h / 2, transform: 'translate(-100%, -50%)' };
    }
    var bubble = show && st ? h(TooltipBubble, { variant: p.variant, position: pos, title: p.title, floating: true, style: st }, p.content) : null;
    var RD = window.ReactDOM;
    return h('span', { ref: ref, className: 'ds-tip', onMouseEnter: function () { setHov(true); }, onMouseLeave: function () { setHov(false); }, onFocus: function () { setHov(true); }, onBlur: function () { setHov(false); } },
      p.children || h('button', { type: 'button', className: 'ds-tip__trigger', 'aria-label': p.label || '도움말' }, h(Icon, { name: 'question', size: 16 })),
      bubble ? (RD && RD.createPortal && typeof document !== 'undefined' ? RD.createPortal(bubble, document.body) : bubble) : null);
  }


  /* ToggleButton — 켜고 끄는 버튼. variant: outline|base · color: neutral|primary · size: sm|md|lg|xl|2xl · active */
  function ToggleButton(p) {
    var o = rest(p, ['variant', 'color', 'size', 'active', 'state', 'iconLeft', 'iconRight', 'className', 'children']);
    o.className = cx('ds-tgl', 'ds-tgl--' + (p.variant || 'outline'), 'ds-tgl--' + (p.color || 'neutral'), 'ds-tgl--' + (p.size || 'md'), p.active && 'is-active', stateCls(p.state), p.className);
    o.type = 'button'; o['aria-pressed'] = !!p.active; if (p.state === 'disabled') o.disabled = true;
    return h('button', o, h('span', { className: 'ds-tgl__layer' }, p.iconLeft ? h(Icon, { name: p.iconLeft }) : null, h('span', null, p.children), p.iconRight ? h(Icon, { name: p.iconRight }) : null));
  }

  /* SquareButton — 아이콘 + 짧은 레이블(세로). variant: solid|outline|base · color: neutral|primary · size: md|lg|xl|2xl|3xl */
  function SquareButton(p) {
    var o = rest(p, ['variant', 'color', 'size', 'icon', 'state', 'className', 'children']);
    o.className = cx('ds-sq', 'ds-sq--' + (p.variant || 'outline'), 'ds-sq--' + (p.color || 'neutral'), 'ds-sq--' + (p.size || 'xl'), stateCls(p.state), p.className);
    o.type = 'button'; if (p.state === 'disabled') o.disabled = true;
    return h('button', o, h('span', { className: 'ds-sq__layer' }, h(Icon, { name: p.loading ? 'loader-4' : (p.icon || 'add'), spin: !!p.loading }), p.children ? h('span', { className: 'ds-sq__label' }, p.children) : null));
  }

  var KAKAO = '<path d="M9.002 1.403C4.529 1.403 0.902 4.220 0.902 7.689C0.902 9.849 2.306 11.753 4.439 12.887L3.539 16.185C3.458 16.478 3.791 16.707 4.048 16.541L7.985 13.926C8.318 13.958 8.656 13.976 8.998 13.976C13.471 13.976 17.098 11.159 17.098 7.689C17.098 4.220 13.475 1.403 9.002 1.403Z" fill="#000000" fill-opacity="0.9"/>';
  /* SocialButton — 소셜 로그인. type: text|icon · variant: brand|secondary · size: sm|md|lg|xl|2xl · align: center|justify */
  function SocialButton(p) {
    var type = p.type || 'text';
    var o = rest(p, ['type', 'variant', 'size', 'align', 'state', 'className', 'children', 'label']);
    o.className = cx('ds-social', 'ds-social--' + (p.variant || 'brand'), 'ds-social--' + (p.size || 'xl'), type === 'icon' && 'ds-social--icon', p.align === 'justify' && 'ds-social--justify', stateCls(p.state), p.className);
    o.type = 'button'; if (p.state === 'disabled') o.disabled = true; if (type === 'icon') o['aria-label'] = p.label || '카카오 로그인';
    var mark = h('span', { className: 'ds-social__mark', 'aria-hidden': true }, h('svg', { viewBox: '0 0 18 18', dangerouslySetInnerHTML: { __html: KAKAO } }));
    return h('button', o, h('span', { className: 'ds-social__layer' }, mark, type === 'icon' ? null : h('span', { className: 'ds-social__label' }, p.children || '카카오 로그인')));
  }

  /* FilterButton — 필터 열기 버튼. variant: neutral|soft|dashed · size: sm|md|lg|xl|2xl · active(값이 골라짐) · label · value */
  function FilterButton(p) {
    var v = p.variant || 'soft', on = !!p.active;
    var o = rest(p, ['variant', 'size', 'active', 'label', 'value', 'state', 'iconLeft', 'iconRight', 'onClear', 'className']);
    o.className = cx('ds-filter', 'ds-filter--' + v, 'ds-filter--' + (p.size || 'md'), on && 'is-active', stateCls(p.state), p.className);
    o.type = 'button'; if (p.state === 'disabled') o.disabled = true;
    var lead = on && v !== 'soft' ? 'close' : (p.iconLeft || 'filter-3');
    var text = on && v === 'soft' ? h('span', { className: 'ds-filter__value' }, (p.label || '필터') + ' ・ ' + (p.value || ''))
      : h('span', { className: 'ds-filter__text' }, h('span', null, p.label || '필터'), on ? h('span', { className: 'ds-filter__div' }) : null, on ? h('span', { className: 'ds-filter__value' }, p.value) : null);
    return h('button', o, h('span', { className: 'ds-filter__layer' }, h(Icon, { name: lead, className: 'ds-filter__lead' }), text, h(Icon, { name: p.iconRight || 'chevron-down' })));
  }

  /* FilterMenu — 필터 목록 판(피그마 Filter Menu). 제목줄(제목 · 도움말 · 닫기) + 섹션(Menu Caption + Checkbox/Radio Menu List md) + 하단 Menu Button Set
     sections[{title, multiple, options}] · value{섹션: [값]} · showTitle · showFooter · title · tooltip · onClose · onApply */
  function FilterMenu(p) {
    var val = p.value || {}, secs = p.sections || [];
    function toggle(si, v, multiple) {
      var cur = (val[si] || []).slice(), i = cur.indexOf(v);
      if (multiple) { if (i >= 0) cur.splice(i, 1); else cur.push(v); } else { if (i >= 0) return; cur = [v]; }  /* 라디오 섹션은 다시 눌러도 꺼지지 않음 */
      var next = Object.assign({}, val); next[si] = cur; p.onChange && p.onChange(next);
    }
    var body = [];
    secs.forEach(function (s, si) {
      var multiple = s.multiple !== false;
      if (si > 0) body.push(h('div', { key: 'd' + si, className: 'ds-fmenu__div' }));
      body.push(h('div', { key: si, className: 'ds-fmenu__sec' },
        s.title ? h('div', { className: 'ds-fmenu__cap' }, s.title) : null,
        h('div', null, (s.options || []).map(function (o, oi) {
          var v = o.value != null ? o.value : o, on = (val[si] || []).indexOf(v) >= 0;
          return h('div', { key: oi, className: cx('ds-fmenu__item', on && 'is-active'), role: multiple ? 'menuitemcheckbox' : 'menuitemradio', 'aria-checked': on, onClick: function () { toggle(si, v, multiple); } },
            h(multiple ? Checkbox : Radio, { checked: on, size: 'sm' }), h('span', { className: 'ds-fmenu__label' }, o.label || o));
        }))));
    });
    return h('div', { className: 'ds-fmenu', role: 'dialog', 'aria-label': p.title || '필터' },
      h('div', { className: 'ds-fmenu__contents' },
        p.showTitle === false ? null : h('div', { className: 'ds-fmenu__title' },
          h('div', { className: 'ds-fmenu__title-text' }, h('span', null, p.title || '필터'), p.tooltip ? h(Tooltip, { content: p.tooltip, position: 'bottom' }) : null),
          h(IconButton, { icon: 'close', label: '닫기', size: 'sm', onClick: p.onClose })),
        h('div', { className: 'ds-fmenu__body' }, body)),
      p.showFooter === false ? null : h('div', { className: 'ds-fmenu__foot' },
        h(MenuButtonSet, { buttons: [{ label: p.resetLabel || '초기화', onClick: function () { p.onChange && p.onChange({}); } }, { label: p.applyLabel || '적용', onClick: p.onApply }] })));
  }

  /* SplitButtonGroup — 붙어 있는 버튼 묶음(보기 방식 · 정렬 등). type: text|icon(아이콘+글자) · size: sm~2xl · align: horizontal|vertical · items[{value,label,icon,disabled}] · value(선택 = 파란 글자) */
  function SplitButtonGroup(p) {
    var items = p.items || [];
    return h('div', { role: 'group', className: cx('ds-split', 'ds-split--' + (p.size || 'md'), p.align === 'vertical' && 'ds-split--v', p.className) },
      items.map(function (it, i) {
        var v = it.value != null ? it.value : it, on = p.value != null && v === p.value;
        return h('button', { key: i, type: 'button', disabled: !!it.disabled, 'aria-pressed': on, className: cx('ds-split__item', on && 'is-selected'), onClick: function () { p.onChange && p.onChange(v); } },
          h('span', { className: 'ds-split__layer' }, (p.type === 'icon' || it.icon) && it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label || it)));
      }));
  }

  /* SquareSplitButtonGroup — 정사각 아이콘 버튼 묶음(지도 도구 · 툴바). size: sm~2xl · align: horizontal|vertical(기본) · showLabel · items[{value,icon,label}]
     toggle(기본 true): 선택된 도구를 다시 누르면 꺼진다(onChange(null)) */
  function SquareSplitButtonGroup(p) {
    var items = p.items || [];
    return h('div', { role: 'group', className: cx('ds-sqsplit', 'ds-sqsplit--' + (p.size || 'xl'), p.align === 'horizontal' ? 'ds-sqsplit--h' : 'ds-sqsplit--v', p.showLabel && 'ds-sqsplit--label', p.className) },
      items.map(function (it, i) {
        var v = it.value != null ? it.value : i, on = p.value != null && v === p.value;
        return h('button', { key: i, type: 'button', disabled: !!it.disabled, 'aria-pressed': on, 'aria-label': it.label, className: cx('ds-sqsplit__item', on && 'is-selected'), onClick: function () { p.onChange && p.onChange(on && p.toggle !== false ? null : v); } },
          h('span', { className: 'ds-sqsplit__layer' }, h(Icon, { name: it.icon || 'add' }), p.showLabel ? h('span', { className: 'ds-sqsplit__label' }, it.label) : null));
      }));
  }

  /* TextButtonGroup — 구분선으로 나뉜 글자 전환(정렬 기준 · 단위). style: default|primary · fontSize: xs|sm|md|base · items · value */
  function TextButtonGroup(p) {
    var items = p.items || [];
    var out = [];
    items.forEach(function (it, i) {
      var v = it.value != null ? it.value : it, on = v === p.value;
      if (i > 0) out.push(h('span', { key: 'd' + i, className: 'ds-tbg__div', 'aria-hidden': true }));
      out.push(h('button', { key: i, type: 'button', 'aria-pressed': on, className: cx('ds-tbg__item', on && 'is-active'), onClick: function () { p.onChange && p.onChange(v); } }, it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label || it)));
    });
    return h('div', { role: 'group', className: cx('ds-tbg', 'ds-tbg--' + (p.style || 'default'), 'ds-tbg--' + (p.fontSize || 'md'), p.className) }, out);
  }

  /* ButtonSet — 모달 · 시트 하단 버튼 묶음. layout: fill(폭 나눠 채움)|fit(오른쪽 맞춤) · align: horizontal|vertical · size: md|lg|xl · buttons[{label,color,variant,onClick}] · left(왼쪽 버튼) · indicator(모바일 홈 표시줄) */
  function ButtonSet(p) {
    var size = p.size || 'xl', btns = p.buttons || [];
    var mk = function (b, i) { return h(Button, { key: i, color: b.color || 'primary', variant: b.variant || (i === btns.length - 1 ? 'solid' : 'soft'), size: size, fullWidth: p.layout !== 'fit', onClick: b.onClick }, b.label); };
    return h('div', { className: cx('ds-bset', 'ds-bset--' + (p.layout || 'fill'), p.align === 'vertical' && 'ds-bset--v', p.className) },
      h('div', { className: 'ds-bset__area' },
        p.layout === 'fit' && p.left ? h('div', { className: 'ds-bset__left' }, p.left) : null,
        h('div', { className: 'ds-bset__btns' }, (p.align === 'vertical' ? btns.slice().reverse() : btns).map(mk))),
      p.indicator ? h('div', { className: 'ds-bset__ind' }, h('span', null)) : null);
  }

  /* MenuButtonSet — 메뉴 · 드롭다운 하단 버튼 줄. type: cta|text · align: justify|center|right|left · buttons[{label,onClick}] (cta: 마지막이 solid) */
  function MenuButtonSet(p) {
    var btns = p.buttons || [], type = p.type || 'cta';
    return h('div', { className: cx('ds-mbset', 'ds-mbset--' + (p.align || 'justify'), p.className) },
      btns.map(function (b, i) {
        if (type === 'text') return h(TextButton, { key: i, size: '2xs', color: b.color || 'neutral', onClick: b.onClick }, b.label);
        if (btns.length === 1) return h(Button, { key: i, color: 'neutral', variant: 'base', size: 'md', fullWidth: p.align === 'center' || p.align === 'justify', onClick: b.onClick }, b.label);
        return h(Button, { key: i, color: 'primary', variant: i === btns.length - 1 ? 'solid' : 'base', size: 'md', onClick: b.onClick }, b.label);
      }));
  }

  /* Segment 3종 — 피그마 Segment Neutral · Primary · Padded Button과 같은 세 컴포넌트(공통 Segment를 색만 바꿔 쓰지 않는다) */
  function SegmentNeutral(p) { return h(Segment, Object.assign({}, p, { color: 'neutral' })); }
  function SegmentPrimary(p) { return h(Segment, Object.assign({}, p, { color: 'primary' })); }
  function SegmentPadded(p) { return h(Segment, Object.assign({}, p, { color: 'padded' })); }

  /* RangeCalendar — 두 달 나란히(피그마 _Base/Calendar/Range Card). month(왼쪽 달) · range[from,to] · onPick(date) · onMonth · today */
  function monthGrid(y, mo, r, today, onPick, hover, onHover) {
    var first = new Date(y, mo, 1).getDay(), days = new Date(y, mo + 1, 0).getDate(), cells = [];
    for (var i = 0; i < first; i++) cells.push(null);
    for (var d = 1; d <= days; d++) cells.push(new Date(y, mo, d));
    var a = r[0], b = r[1];
    /* 시작일만 고른 상태에서는 마우스를 올린 날짜까지 기간을 미리 보여준다(예약 사이트 방식) */
    if (a && !b && hover && hover > a) b = hover;
    var preview = r[0] && !r[1] && b;
    return h('div', { className: 'ds-cal__grid ds-cal__grid--range', onMouseLeave: function () { onHover && onHover(null); } },
      WEEK.map(function (w, i) { return h('span', { key: 'w' + i, className: cx('ds-cal__wd', i === 0 && 'is-sun', i === 6 && 'is-sat') }, w); }),
      cells.map(function (c, i) {
        if (!c) return h('span', { key: i });
        var isA = sameDay(c, a), isB = sameDay(c, b), mid = a && b && c > a && c < b, only = isA && !b;
        return h('button', { key: i, type: 'button', className: cx('ds-rday', (isA || isB || mid) && 'is-in', preview && 'is-preview', isA && b && 'is-start', isB && !preview && 'is-end', isB && preview && 'is-end is-hover-end', only && 'is-only', sameDay(c, today) && 'is-today', c.getDay() === 0 && 'is-sun', c.getDay() === 6 && 'is-sat'), onMouseEnter: function () { onHover && onHover(c); }, onClick: function () { onPick && onPick(c); } }, h('span', null, c.getDate()));
      }));
  }

  function RangeCalendar(p) {
    var m = p.month || p.range && p.range[0] || new Date(), y = m.getFullYear(), mo = m.getMonth(), r = p.range || [];
    var m2 = new Date(y, mo + 1, 1), hs = React.useState(null), hov = hs[0], setHov = hs[1];
    var head = function (yy, mm, side) {
      return h('div', { className: 'ds-cal__head ds-rcal__head' },
        side === 'l' ? h(IconButton, { icon: 'chevron-right', label: '이전 달', size: 'sm', className: 'ds-cal__prev', onClick: function () { p.onMonth && p.onMonth(new Date(y, mo - 1, 1)); } }) : h('span', { className: 'ds-rcal__sp' }),
        h('span', { className: 'ds-cal__title' }, yy + '년 ' + (mm + 1) + '월'),
        side === 'r' ? h(IconButton, { icon: 'chevron-right', label: '다음 달', size: 'sm', onClick: function () { p.onMonth && p.onMonth(new Date(y, mo + 1, 1)); } }) : h('span', { className: 'ds-rcal__sp' }));
    };
    return h('div', { className: 'ds-rcal', role: 'dialog', 'aria-label': '기간 선택' },
      h('div', { className: 'ds-rcal__card' }, head(y, mo, 'l'), monthGrid(y, mo, r, p.today, p.onPick, hov, setHov)),
      h('div', { className: 'ds-rcal__div' }),
      h('div', { className: 'ds-rcal__card' }, head(m2.getFullYear(), m2.getMonth(), 'r'), monthGrid(m2.getFullYear(), m2.getMonth(), r, p.today, p.onPick, hov, setHov)));
  }

  /* DateRangePicker — 시작일 · 종료일 버튼 묶음(피그마 DatePicker/ButtonGroup) + 두 달 달력. value[from,to] · onChange · size · open · onToggle · month · onMonth · today */
  /* DateRangePicker — 예약 사이트 방식 기간 선택. 버튼 두 개(시작일 · 종료일) + 두 달 달력.
     · 버튼을 누르면 그 칸이 '고르는 중'(파란 테두리) — 시작일을 고르면 자동으로 종료일로 넘어가고, 종료일을 고르면 닫힌다.
     · 시작일만 고른 상태에서 날짜에 마우스를 올리면 그 날까지 기간을 미리 보여준다.
     variant: joined(붙은 버튼, 기본)|split(DatePicker 버튼 두 개 + "~", 접미사 부터 · 까지) */
  function DateRangePicker(p) {
    var uv = useValue(p); p = Object.assign({}, p, { value: uv[0], onChange: uv[1] });
    var pop = usePopup(p), v = p.value || [], size = p.size || 'xl';
    var fs = React.useState('start'), field = fs[0], setField = fs[1];
    function pick(c) {
      var a = v[0], b = v[1], next;
      if (field === 'start' || !a) next = [c, null];  /* 시작일을 새로 고르면 종료일은 비우고 종료일 고르기로 넘어감 */
      else next = c < a ? [c, null] : [a, c];
      p.onChange && p.onChange(next);
      if (next[1] && field === 'end') { setField('start'); pop.close(); } else setField('end');
    }
    var openAt = function (f) { setField(f); if (!pop.open) pop.toggle(); };
    var split = p.variant === 'split';
    var btn = function (d, ph, f) {
      var active = pop.open && field === f;
      return h('button', { type: 'button', className: cx('ds-dp__btn', 'ds-dp__btn--' + size, !split && ('ds-drp__btn--' + (f === 'start' ? 'l' : 'r')), !d && 'is-empty', active && 'is-active-field'), onClick: function () { active ? pop.close() : openAt(f); }, 'aria-expanded': active },
        h('span', { className: 'ds-dp__layer' }, h(Icon, { name: 'calendar' }), h('span', { className: 'ds-dp__text ds-num' }, d ? fmtDate(d) : ph), split ? h('span', { className: 'ds-dp__suffix' }, f === 'start' ? (p.startSuffix || '부터') : (p.endSuffix || '까지')) : null));
    };
    var group = split
      ? h('div', { className: 'ds-row ds-drp__split' }, btn(v[0], p.startPlaceholder || '시작일', 'start'), h('span', { className: 'ds-drp__tilde' }, '~'), btn(v[1], p.endPlaceholder || '종료일', 'end'))
      : h('div', { className: 'ds-drp__group' }, btn(v[0], p.startPlaceholder || '시작일', 'start'), btn(v[1], p.endPlaceholder || '종료일', 'end'));
    return h('div', { ref: pop.ref, className: 'ds-dp ds-drp' }, group,
      pop.open ? h('div', { className: 'ds-dp__panel' },
        h('div', { className: 'ds-drp__panel' },
          h(RangeCalendar, { range: v, month: p.month, onMonth: p.onMonth, today: p.today, onPick: pick }))) : null);
  }


  /* Password — 비밀번호 입력. 오른쪽 눈 아이콘으로 보기 전환, rules[{label, ok}]로 조건 카드(focus 때) */
  function Password(p) {
    var s = React.useState(false), show = s[0], setShow = s[1];
    var f = React.useState(false), foc = f[0], setFoc = f[1];
    var o = rest(p, ['variant', 'size', 'state', 'negative', 'rules', 'rulesTitle', 'className', 'showRules']);
    o.type = show ? 'text' : 'password'; o.onFocus = function () { setFoc(true); }; o.onBlur = function () { setFoc(false); };
    if (p.state === 'disabled') o.disabled = true;
    if (p.value !== undefined && !p.onChange) o.onChange = function () {};
    var rules = p.rules || [], open = (p.showRules != null ? p.showRules : foc) && rules.length;
    return h('div', { className: 'ds-pw' },
      h('div', { className: inputCls(Object.assign({}, p, { state: foc && !p.state ? 'focus' : p.state })) },
        h('input', o),
        h('button', { type: 'button', className: 'ds-pw__eye', 'aria-label': show ? '비밀번호 숨기기' : '비밀번호 보기', 'aria-pressed': show, onClick: function () { setShow(!show); } }, h(Icon, { name: 'eye' }))),
      open ? h('div', { className: 'ds-pw__rules' },
        h('p', { className: 'ds-pw__title' }, p.rulesTitle || '비밀번호는 다음 조건을 만족해야 해요'),
        h('div', { className: 'ds-pw__div' }),
        rules.map(function (r, i) { return h('div', { key: i, className: cx('ds-pw__rule', r.ok ? 'is-ok' : 'is-bad') }, h(Icon, { name: r.ok ? 'check' : 'close' }), h('span', null, r.label)); })) : null);
  }

  /* TextArea — 여러 줄 입력. variant: line|soft · maxLength(글자 수 표시) · helper · actions(아래 버튼 영역) · rows */
  function TextArea(p) {
    var o = rest(p, ['variant', 'state', 'negative', 'helper', 'actions', 'className', 'count']);
    if (p.state === 'disabled') o.disabled = true; if (p.state === 'read-only') o.readOnly = true;
    if (p.value !== undefined && !p.onChange) o.onChange = function () {};
    var len = (p.value || '').length;
    return h('div', { className: cx(inputCls(Object.assign({}, p, { size: 'area' })), 'ds-ta') },
      h('textarea', Object.assign({ rows: p.rows || 5 }, o)),
      (p.helper || p.maxLength) ? h('div', { className: 'ds-ta__foot' }, h('span', { className: 'ds-ta__help' }, p.helper || ''), p.maxLength ? h('span', { className: 'ds-ta__count ds-num' }, len + '/' + p.maxLength) : null) : null,
      p.actions ? h('div', { className: 'ds-ta__actions' }, p.actions) : null);
  }

  /* InputQuantity — 수량 입력: 입력창 양옆에 Neutral base 아이콘 버튼(− +). size: md|xl|2xl · min · max · step */
  function qtyStep(p, d) { var v = Number(p.value || 0) + d * (p.step || 1); if (p.min != null) v = Math.max(p.min, v); if (p.max != null) v = Math.min(p.max, v); p.onChange && p.onChange(v); }
  function InputQuantity(p) {
    var size = p.size || 'xl', dis = p.state === 'disabled';
    return h('div', { className: cx('ds-qty', 'ds-qty--' + size) },
      h(Button, { color: 'neutral', variant: 'base', size: size, icon: 'subtract', label: '빼기', state: dis || (p.min != null && Number(p.value) <= p.min) ? 'disabled' : undefined, onClick: function () { qtyStep(p, -1); } }),
      h('div', { className: inputCls(Object.assign({}, p, { size: size })) }, h('input', { value: p.value != null ? p.value : '', inputMode: 'numeric', disabled: dis, readOnly: p.state === 'read-only', onChange: function (e) { var n = Number(e.target.value.replace(/[^0-9-]/g, '')); p.onChange && p.onChange(isNaN(n) ? 0 : n); } }), p.suffix ? h('span', { className: 'ds-input__suffix' }, p.suffix) : null),
      h(Button, { color: 'neutral', variant: 'base', size: size, icon: 'add', label: '더하기', state: dis || (p.max != null && Number(p.value) >= p.max) ? 'disabled' : undefined, onClick: function () { qtyStep(p, 1); } }));
  }

  /* InputQuantityGroup — 한 판 안에 − 값 + (ghost 아이콘 버튼). size: md|xl|2xl · buttons: outside(구분선)|inside */
  function InputQuantityGroup(p) {
    var size = p.size || 'xl', dis = p.state === 'disabled', inside = p.buttons === 'inside';
    var bs = inside ? ({ md: 'sm', xl: 'lg', '2xl': 'xl' })[size] : size;
    var filled = p.value != null && Number(p.value) !== 0;
    return h('div', { className: cx('ds-qg', 'ds-qg--' + size, inside ? 'ds-qg--inside' : 'ds-qg--outside', p.negative && 'is-negative', dis && 'is-disabled') },
      h(Button, { color: 'neutral', variant: 'ghost', size: bs, icon: 'subtract', label: '빼기', state: dis ? 'disabled' : undefined, onClick: function () { qtyStep(p, -1); } }),
      h('span', { className: cx('ds-qg__value', 'ds-num', !filled && 'is-zero') }, p.value != null ? p.value : 0),
      h(Button, { color: 'neutral', variant: 'ghost', size: bs, icon: 'add', label: '더하기', state: dis ? 'disabled' : undefined, onClick: function () { qtyStep(p, 1); } }));
  }

  /* PhoneVerification — 본인인증(휴대폰 번호 → 인증번호) 입력 묶음.
     type 1: 입력 아래 꽉 찬 버튼(모바일 · 좁은 폼) / type 2: 입력 옆 버튼(넓은 폼).
     흐름: [휴대폰 번호 + 인증 요청(Primary soft)] → 요청 후 버튼이 '재요청'(Neutral soft)으로 바뀌고
           [인증번호 + 남은 시간(text-primary-main) + 인증 완료(Primary soft)]가 아래에 나타난다. */
  function PhoneVerification(p) {
    var type = p.type === 2 || p.type === '2' ? 2 : 1, size = p.size || 'xl', dur = p.duration || 180;
    var ph = React.useState(p.phone || ''), phone = ph[0], setPhone = ph[1];
    var cd = React.useState(p.code || ''), code = cd[0], setCode = cd[1];
    var rq = React.useState(!!p.requested), req = rq[0], setReq = rq[1];
    var tl = React.useState(dur), left = tl[0], setLeft = tl[1];
    var dn = React.useState(false), done = dn[0], setDone = dn[1];
    React.useEffect(function () {
      if (!req || done || left <= 0) return;
      var t = setTimeout(function () { setLeft(left - 1); }, 1000);
      return function () { clearTimeout(t); };
    }, [req, done, left]);
    var mmss = (left / 60 | 0).toString().padStart(2, '0') + ':' + (left % 60).toString().padStart(2, '0');
    var request = function () { setReq(true); setLeft(dur); setDone(false); setCode(''); p.onRequest && p.onRequest(phone); };
    var confirm = function () { setDone(true); p.onVerify && p.onVerify(code); };
    var full = type === 1;
    var reqBtn = h(Button, { color: req ? 'neutral' : 'primary', variant: 'soft', size: size, fullWidth: full, onClick: function () { if (phone) request(); } }, req ? (full ? '인증번호 재요청' : '재요청') : '인증 요청');
    var okBtn = h(Button, { color: 'primary', variant: 'soft', size: size, fullWidth: full, state: done ? 'disabled' : undefined, onClick: function () { if (code) confirm(); } }, done ? '인증 완료됨' : '인증 완료');
    var phoneInput = h(Input, { size: size, placeholder: '휴대폰 번호 입력', value: phone, inputMode: 'numeric', onChange: function (e) { setPhone(e.target.value.replace(/[^0-9]/g, '')); } });
    var codeInput = h(Input, { size: size, placeholder: '인증번호 입력', value: code, inputMode: 'numeric', suffix: done ? '' : mmss, negative: req && left <= 0 && !done, className: 'ds-pv__code', onChange: function (e) { setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, p.codeLength || 6)); } });
    var row = function (input, btn) { return full ? h('div', { className: 'ds-pv__stack' }, input, btn) : h('div', { className: 'ds-pv__row' }, input, btn); };
    return h('div', { className: cx('ds-pv', 'ds-pv--t' + type, 'ds-pv--' + size), style: p.width ? { width: p.width } : undefined },
      p.title ? h('p', { className: 'ds-pv__title' }, p.title) : null,
      h(FormField, { label: p.phoneLabel || '휴대폰번호', size: size }, row(phoneInput, reqBtn)),
      req ? h(FormField, { label: p.codeLabel || '인증번호', size: size, error: left <= 0 && !done ? '인증 시간이 지났어요. 인증번호를 다시 요청해 주세요.' : null, helper: done ? '인증이 완료되었어요.' : null }, row(codeInput, okBtn)) : null);
  }

  /* Quantity — 큰 숫자 수량 조절(피그마 Quantity). − 값 + : Neutral base 아이콘 버튼 + 굵은 숫자. size: xs|sm|md|lg|xl|2xl · min · max · step */
  function Quantity(p) {
    var uv = useValue(Object.assign({ defaultValue: 0 }, p)), v = Number(uv[0] || 0), size = p.size || 'md';
    var bs = ({ xs: 'sm', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' })[size];
    var step = function (d) { var n = v + d * (p.step || 1); if (p.min != null) n = Math.max(p.min, n); if (p.max != null) n = Math.min(p.max, n); uv[1](n); };
    return h('div', { className: cx('ds-qtyb', 'ds-qtyb--' + size), role: 'group', 'aria-label': p.label || '수량' },
      h(Button, { color: 'neutral', variant: 'base', size: bs, icon: 'subtract', label: '빼기', state: p.state === 'disabled' || (p.min != null && v <= p.min) ? 'disabled' : undefined, onClick: function () { step(-1); } }),
      h('span', { className: 'ds-qtyb__value ds-num', 'aria-live': 'polite' }, v),
      h(Button, { color: 'neutral', variant: 'base', size: bs, icon: 'add', label: '더하기', state: p.state === 'disabled' || (p.max != null && v >= p.max) ? 'disabled' : undefined, onClick: function () { step(1); } }));
  }

  /* ControlBox — 고르는 카드(피그마 Control Box). indicator: radio|check|none · selected · title · badge · description · body · onClick */
  function ControlBox(p) {
    var ind = p.indicator || 'radio', on = !!p.selected;
    var mark = ind === 'none' ? null : h(ind === 'check' ? Checkbox : Radio, { checked: on, size: 'sm', state: p.state === 'disabled' ? 'disabled' : undefined });
    return h('div', { role: ind === 'check' ? 'checkbox' : 'radio', 'aria-checked': on, tabIndex: 0, className: cx('ds-cbox', on && 'is-selected', p.state === 'hover' && 'is-hover', p.className),
      onClick: function () { p.onClick && p.onClick(); }, onKeyDown: function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); p.onClick && p.onClick(); } } },
      h('div', { className: 'ds-cbox__text' },
        h('div', { className: 'ds-cbox__head' },
          h('div', { className: 'ds-cbox__title' }, h('span', null, p.title), p.badge ? h(CategoryBadge, { color: 'white', border: true }, p.badge) : null),
          p.description ? h('span', { className: 'ds-cbox__desc' }, p.description) : null),
        p.body ? h('div', { className: 'ds-cbox__body' }, p.body) : null),
      mark ? h('span', { className: 'ds-cbox__mark', 'aria-hidden': true }, mark) : null);
  }

  /* SelectWithLabel — 레이블 + Select 1~3개 + 버튼 + 도움말(피그마 Select With Label). FormField에 Select를 넣는 것과 같다 */
  function SelectWithLabel(p) {
    var selects = (p.selects || [{}]).map(function (s, i) { return h(Select, Object.assign({ key: i, size: p.size || 'xl' }, s)); });
    return h(FormField, { label: p.label, size: p.size || 'xl', align: p.align, required: p.required, tooltip: p.tooltip, helper: p.helper, error: p.error, action: p.action }, selects);
  }

  /* MenuCaption — 메뉴 안 제목(피그마 Item/Menu Caption). type: heading(목록 위 작은 제목)|caption(회색 띠 + 설명) · size: sm~2xl */
  function MenuCaption(p) {
    var t = p.type || 'heading';
    return h('div', { className: cx('ds-mcap', 'ds-mcap--' + t, 'ds-mcap--' + (p.size || 'md')), role: 'presentation' },
      h('span', { className: 'ds-mcap__t' }, p.children || p.text), p.description ? h('span', { className: 'ds-mcap__d' }, p.description) : null);
  }

  /* MenuList — 메뉴 목록(피그마 Menu/Basic · Checkbox · Radio · Switch · Profile · Quantity Menu List).
     type: basic|checkbox|radio|switch|profile|quantity · size: sm|md(기본)|lg|xl|2xl(profile · quantity는 고정)
     items[{value,label,description,icon,rightIcon,badge,suffix,disabled,divider,heading}] · value(basic · radio: 값, checkbox · switch: 값 배열, quantity: {값: 수}) · onChange */
  function MenuList(p) {
    var type = p.type || 'basic', size = p.size || 'lg', items = p.items || [];  /* 기본 lg(36) — Select 옵션과 같은 크기 */
    var uv = useValue(Object.assign({ defaultValue: type === 'checkbox' || type === 'switch' ? [] : type === 'quantity' ? {} : null }, p)), val = uv[0];
    function isOn(v) { return type === 'checkbox' || type === 'switch' ? (val || []).indexOf(v) >= 0 : type === 'quantity' ? false : val === v; }
    function pick(v) {
      if (type === 'checkbox' || type === 'switch') { var a = (val || []).slice(), i = a.indexOf(v); if (i >= 0) a.splice(i, 1); else a.push(v); uv[1](a); }
      else if (type === 'radio') { if (val !== v) uv[1](v); }
      else if (type !== 'quantity') uv[1](v);
      p.onPick && p.onPick(v);
    }
    return h('div', { className: cx('ds-mlist', 'ds-mlist--' + type, 'ds-mlist--' + size, p.className), role: type === 'checkbox' || type === 'switch' ? 'group' : 'listbox' }, items.map(function (it, i) {
      if (it.heading) return h(MenuCaption, { key: i, size: size, type: it.caption ? 'caption' : 'heading', description: it.description }, it.heading);
      var v = it.value != null ? it.value : it.label, on = isOn(v), dis = !!it.disabled;
      var lead = null, trail = null;
      if (type === 'checkbox') lead = h(Checkbox, { checked: on, size: 'sm', state: dis ? 'disabled' : undefined });
      if (type === 'radio') lead = h(Radio, { checked: on, size: 'sm', variant: 'secondary', state: dis ? 'disabled' : undefined });
      if (type === 'profile') lead = h('span', { className: 'ds-mlist__avatar' }, it.avatar ? h('img', { src: it.avatar, alt: '' }) : h(Icon, { name: 'user-avatar' }));
      if ((type === 'basic' || type === 'switch' || type === 'quantity') && it.icon) lead = h(Icon, { name: it.icon, className: 'ds-mlist__icon' });
      if (type === 'switch') trail = h(Switch, { checked: on, size: '2xs', state: dis ? 'disabled' : undefined });
      if (type === 'quantity') trail = h(Quantity, { size: 'sm', min: 0, value: (val || {})[v] || 0, onChange: function (n) { var o = Object.assign({}, val); o[v] = n; uv[1](o); } });
      if (it.rightIcon) trail = h(Icon, { name: it.rightIcon, className: 'ds-mlist__icon' });
      return h(React.Fragment, { key: i },
        h('div', { role: 'option', 'aria-selected': on, 'aria-disabled': dis, className: cx('ds-mlist__item', on && 'is-active', dis && 'is-disabled'), onClick: function () { if (!dis && type !== 'quantity') pick(v); } },
          lead ? h('span', { className: 'ds-mlist__lead' }, lead) : null,
          h('span', { className: 'ds-mlist__text' },
            h('span', { className: 'ds-mlist__label' }, h('span', null, it.label), it.badge ? h(CategoryBadge, { color: 'white', border: true }, it.badge) : null, it.suffix != null ? h('span', { className: 'ds-mlist__suffix ds-num' }, it.suffix) : null),
            it.description ? h('span', { className: 'ds-mlist__desc' }, it.description) : null),
          trail ? h('span', { className: 'ds-mlist__trail', onClick: type === 'quantity' ? function (e) { e.stopPropagation(); } : undefined }, trail) : null),
        it.divider ? h('div', { className: 'ds-mlist__div' }) : null);
    }));
  }

  /* Cascader — 단계별 목록(피그마 Cascader 1depth · 2depth+). options 트리[{value,label,icon,children}] · value(경로 배열) · onChange(경로) · size */
  function Cascader(p) {
    var uv = useValue(Object.assign({ defaultValue: [] }, p)), path = uv[0] || [], size = p.size || 'md';
    var cols = [p.options || []], cur = p.options || [];
    path.forEach(function (v) { var n = cur.filter(function (o) { return o.value === v; })[0]; if (n && n.children) { cols.push(n.children); cur = n.children; } });
    return h('div', { className: cx('ds-casc', 'ds-casc--' + size) }, cols.map(function (col, d) {
      return h('div', { key: d, className: cx('ds-casc__col', d > 0 && 'ds-casc__col--sub'), role: 'listbox' }, col.map(function (o, i) {
        var on = path[d] === o.value;
        return h('div', { key: i, role: 'option', 'aria-selected': on, className: cx('ds-mlist__item', on && 'is-active', o.disabled && 'is-disabled'), onClick: function () { if (o.disabled) return; uv[1](path.slice(0, d).concat([o.value])); } },
          d === 0 && o.icon ? h('span', { className: 'ds-mlist__lead' }, h(Icon, { name: o.icon, className: 'ds-mlist__icon' })) : null,
          h('span', { className: 'ds-mlist__text' }, h('span', { className: 'ds-mlist__label' }, h('span', null, o.label), o.badge ? h(CategoryBadge, { color: 'white', border: true }, o.badge) : null)),
          o.children ? h('span', { className: 'ds-mlist__trail' }, h(Icon, { name: 'chevron-right', className: 'ds-casc__arrow' })) : null);
      }));
    }));
  }

  /* FilterDropdown — FilterButton + FilterMenu 묶음. 목록은 떠 있는 판, 바깥 클릭 · Esc · 닫기 · 적용으로 닫힘. 고른 값이 버튼에 표시된다 */
  function FilterDropdown(p) {
    var pop = usePopup(p), uv = useValue(Object.assign({ defaultValue: {} }, p)), val = uv[0] || {};
    var picked = []; Object.keys(val).forEach(function (k) { picked = picked.concat(val[k] || []); });
    return h('div', { ref: pop.ref, className: 'ds-filter-wrap' },
      h(FilterButton, { variant: p.variant, size: p.size, active: picked.length > 0, label: p.label || '필터', value: picked.join(', '), onClick: pop.toggle, 'aria-expanded': pop.open }),
      pop.open ? h(FilterMenu, { sections: p.sections, value: val, onChange: uv[1], title: p.title, tooltip: p.tooltip, showTitle: p.showTitle, showFooter: p.showFooter, onClose: pop.close, onApply: function () { p.onApply && p.onApply(val); pop.close(); } }) : null);
  }

  /* Avatar — 사용자 이미지(피그마 Avatar character · photo). size: xs 24|sm 28|md 32|lg 40|xl 44|2xl 48 · src(사진) */
  function Avatar(p) {
    var z = { '2xs': 20, xs: 24, sm: 28, md: 32, lg: 36, xl: 40, '2xl': 48, '3xl': 56, '4xl': 64 }[p.size || 'md'] || 32;  /* 피그마 Avatar 2xs~4xl */
    return h('span', { className: 'ds-avatar', style: { width: z, height: z }, 'aria-label': p.label }, p.src ? h('img', { src: p.src, alt: '' }) : h(Icon, { name: 'user-avatar', size: z / 2 }));
  }

  /* ReportNav — 리포트 화면 상단 바(피그마 Navigation/Report Navigation). 높이 56 · surface-main · 좌우 48.
     logo · title(가운데 제목, 예: "분석 지역 | 업종") · align left|center · width fill|default|wide · actions(오른쪽 버튼) · user{name} · onLogout */
  function ReportNav(p) {
    var w = p.width || 'fill';
    return h('header', { className: 'ds-gnb ds-rnav' },
      h('div', { className: cx('ds-gnb__inner', 'ds-gnb__inner--' + w) },
        h('div', { className: 'ds-gnb__left' }, p.logo || null),
        h('div', { className: cx('ds-rnav__title', p.align === 'center' && 'is-center') }, p.title),
        h('div', { className: 'ds-gnb__right ds-rnav__right' },
          p.actions ? h('div', { className: 'ds-row', style: { gap: 'var(--spacing-3)' } }, p.actions) : null,
          p.user ? h('div', { className: 'ds-row', style: { gap: 'var(--spacing-2)' } },
            h(UserMenu, { trigger: 'profile', user: p.user, items: p.userItems, onSelect: p.onUserMenu }),
            h(TextButton, { size: '2xs', color: 'neutral-subtle', iconRight: 'logout-box-r', onClick: p.onLogout }, '로그아웃')) : null)));
  }

  /* TitleBar — 모바일 · 팝업 제목 줄(피그마 Title bar). 높이 56 · 좌우 8. back(왼쪽 화살표) · title · badge · align left|center · actions(오른쪽 Icon Button) · onClose */
  function TitleBar(p) {
    return h('div', { className: cx('ds-tbar', p.align === 'center' && 'ds-tbar--center', p.scrolled && 'is-scrolled') },
      h('div', { className: 'ds-tbar__left' }, p.onBack ? h(IconButton, { icon: 'arrow-left', label: '뒤로', size: 'lg', onClick: p.onBack }) : null),
      h('div', { className: 'ds-tbar__title' }, h('span', null, p.title), p.badge ? h(CategoryBadge, { color: 'white', border: true }, p.badge) : null),
      h('div', { className: 'ds-tbar__right' }, p.actions || null, p.onClose ? h(IconButton, { icon: 'close', label: '닫기', size: 'lg', onClick: p.onClose }) : null));
  }

  /* MobileNav — 모바일 상단 바(피그마 Mobile/NavLogo). 높이 56 · 왼쪽 18 · 오른쪽 8. logo · align · actions · onMenu(햄버거 → NavDrawer) */
  function MobileNav(p) {
    return h('div', { className: cx('ds-mnav', p.align === 'center' && 'ds-mnav--center', p.scrolled && 'is-scrolled') },
      h('div', { className: 'ds-mnav__logo' }, p.logo),
      h('div', { className: 'ds-tbar__right' }, p.actions || null, p.onMenu ? h(IconButton, { icon: 'menu', label: '메뉴', size: 'lg', onClick: p.onMenu }) : null));
  }

  /* NavDrawer — 모바일 전체 메뉴(피그마 Mobile/NavDrawer). profile{name,sub} + 로그인/로그아웃 버튼 · groups[{heading,items:[{value,label,description}]}] · value · onChange · 묶음 사이 구분선 */
  function NavDrawer(p) {
    var groups = p.groups || [];
    return h('nav', { className: 'ds-drawer', 'aria-label': '전체 메뉴' },
      p.profile ? h('div', { className: 'ds-drawer__profile' },
        h('div', { className: 'ds-row', style: { gap: 'var(--spacing-2)', flex: 1, minWidth: 0 } }, h(Avatar, { size: '2xl' }), h('div', { className: 'ds-drawer__who' }, h('b', null, p.profile.name), p.profile.sub ? h('span', null, p.profile.sub) : null)),
        p.profile.action || null) : null,
      groups.map(function (g, gi) {
        return h(React.Fragment, { key: gi }, (p.profile || gi > 0) ? h('div', { className: 'ds-drawer__div' }) : null,
          h('div', { className: 'ds-drawer__group' }, g.heading ? h('div', { className: 'ds-gnb__heading' }, g.heading) : null,
            (g.items || []).map(function (x, xi) {
              var xv = x.value != null ? x.value : x.label, on = xv === p.value;
              return h('button', { key: xi, type: 'button', disabled: !!x.disabled, className: cx('ds-gnb__subitem', on && 'is-active'), onClick: function () { p.onChange && p.onChange(xv); } }, h('span', { className: 'ds-gnb__subname' }, x.label), x.description ? h('span', { className: 'ds-gnb__subdesc' }, x.description) : null);
            })));
      }));
  }

  /* UserMenu — 내 정보 메뉴. 아이콘(또는 프로필 버튼)을 누르면 떠 있는 메뉴(이름 · 마이페이지 · 설정 · 로그아웃). 바깥 클릭 · Esc · 항목 선택으로 닫힘.
     trigger: icon|profile · user{name,sub} · items[{value,label,icon,divider}] · onSelect(value) */
  function UserMenu(p) {
    var pop = usePopup(p), user = p.user || {};
    var items = p.items || [{ value: 'mypage', label: '마이페이지', icon: 'user' }, { value: 'settings', label: '설정', icon: 'settings-3', divider: true }, { value: 'logout', label: '로그아웃', icon: 'logout-box-r' }];
    var trig = p.trigger === 'profile'
      ? h('button', { type: 'button', className: cx('ds-profile-btn', pop.open && 'is-open'), onClick: pop.toggle, 'aria-haspopup': 'menu', 'aria-expanded': pop.open }, h(Avatar, { size: 'md' }), h('span', null, user.name), h(Icon, { name: 'chevron-down', className: 'ds-gnb__caret' }))
      : h(IconButton, { icon: 'user', label: '내 정보', size: p.size || 'md', onClick: pop.toggle, 'aria-haspopup': 'menu', 'aria-expanded': pop.open, className: pop.open ? 'is-pressed' : undefined });
    return h('div', { ref: pop.ref, className: 'ds-umenu' }, trig,
      pop.open ? h('div', { className: 'ds-menu ds-umenu__panel', role: 'menu' },
        user.name ? h('div', { className: 'ds-umenu__who' }, h(Avatar, { size: 'lg' }), h('div', null, h('b', null, user.name), user.sub ? h('span', null, user.sub) : null)) : null,
        user.name ? h('div', { className: 'ds-mlist__div' }) : null,
        h(MenuList, { size: 'lg', items: items, value: null, onPick: function (v) { pop.close(); p.onSelect && p.onSelect(v); } })) : null);
  }

  /* 알림 공통 — 종류별 아이콘(피그마 Icon Set): 안내 information-2 · 경고 alert · 오류 error-warning · 완료 checkbox-circle */
  var ALERT_ICON = { basic: 'information-2', information: 'information-2', info: 'information-2', highlight: 'information-2', dark: 'information-2', warning: 'alert', negative: 'error-warning', positive: 'checkbox-circle' };
  /* InlineAlert — 한 줄 안내(피그마 Inline Alert). type: basic|information|warning|negative|positive · variant: soft|line
     title(semibold) · children(설명, medium) · icon(false로 숨김) · action(버튼) · onClose */
  function InlineAlert(p) {
    var t = p.type || 'basic';
    return h('div', { role: t === 'negative' || t === 'warning' ? 'alert' : 'status', className: cx('ds-alert', 'ds-alert--' + t, p.variant === 'line' && 'ds-alert--line') },
      p.icon !== false ? h(Icon, { name: p.icon || ALERT_ICON[t], className: 'ds-alert__icon' }) : null,
      h('div', { className: 'ds-alert__text' }, p.title ? h('span', { className: 'ds-alert__title' }, p.title) : null, p.children ? h('span', { className: 'ds-alert__desc' }, p.children) : null),
      p.action || null,
      p.onClose ? h(IconButton, { icon: 'close', size: 'xs', label: '닫기', onClick: p.onClose }) : null);
  }
  /* ExpandedAlert — 여러 줄 안내 블록(피그마 Expanded Alert). type: info|highlight|warning|negative|positive · variant: soft|line
     title(아이콘과 한 줄) · children(설명) · slot(목록 등) · actions(아래 버튼: 닫기 ghost + 주 버튼 base) */
  function ExpandedAlert(p) {
    var t = p.type || 'info';
    return h('div', { role: t === 'negative' || t === 'warning' ? 'alert' : 'status', className: cx('ds-xalert', 'ds-xalert--' + t, p.variant === 'line' && 'ds-xalert--line') },
      h('div', { className: 'ds-xalert__text' },
        h('div', { className: 'ds-xalert__title' }, p.icon !== false ? h(Icon, { name: p.icon || ALERT_ICON[t] }) : null, h('span', null, p.title)),
        p.children ? h('div', { className: 'ds-xalert__desc' }, p.children) : null),
      p.slot ? h('div', { className: 'ds-xalert__slot' }, p.slot) : null,
      p.actions ? h('div', { className: 'ds-xalert__actions' }, p.actions) : null);
  }
  /* Toast — 잠깐 떴다 사라지는 알림(피그마 Toast). type: dark|basic|information|warning|negative|positive · title · children · action · onClose */
  function Toast(p) {
    var t = p.type || 'dark', light = t === 'basic';
    return h('div', { role: 'status', className: cx('ds-toast', 'ds-toast--' + t) },
      p.icon !== false ? h(Icon, { name: p.icon || ALERT_ICON[t], className: 'ds-alert__icon' }) : null,
      h('div', { className: 'ds-alert__text' }, p.title ? h('span', { className: 'ds-alert__title' }, p.title) : null, p.children ? h('span', { className: 'ds-alert__desc' }, p.children) : null),
      p.action || null,
      p.onClose ? h(IconButton, { icon: 'close', size: 'xs', color: light ? 'neutral' : 'inverse', label: '닫기', onClick: p.onClose }) : null);
  }

  /* TooltipBubble — 말풍선 판만(피그마 Border Tooltip · Solid Tooltip). 문서 안 안내(코치마크)처럼 늘 떠 있을 때 직접 쓴다.
     variant: border|solid · position: top|bottom|left|right|none(꼬리 없음) · title · children · onClose */
  function TooltipBubble(p) {
    var pos = p.position || 'top';
    return h('span', { role: 'tooltip', className: cx('ds-root', 'ds-tip__bubble', 'ds-tip__bubble--' + pos, p.variant === 'solid' && 'ds-tip__bubble--solid', p.floating ? 'is-floating' : 'is-static'), style: p.style },
      h('span', { className: 'ds-tip__text' }, p.title ? h('span', { className: 'ds-tip__title' }, p.title) : null, h('span', { className: 'ds-tip__body' }, p.children)),
      p.onClose ? h(IconButton, { icon: 'close', size: '3xs', color: p.variant === 'solid' ? 'inverse' : 'neutral', label: '닫기', onClick: p.onClose }) : null);
  }

  /* 표 셀 미리보기 · 낱개 셀(피그마 Cell/* · Header/*). 표 밖에서 셀 하나를 그릴 때 — header(머리 셀) · align · fixed(고정 경계 그림자) · size xl(높이 40) */
  function TableCell(p) {
    return h('div', { className: cx('ds-tcell', p.header && 'is-header', p.header === 'main' && 'is-white', p.minimal && 'is-minimal', p.align && ('is-' + p.align), p.fixed && ('is-fixed-' + p.fixed), p.size === 'xl' && 'is-xl'), style: p.style }, p.children);
  }
  /* TableStatus — 진행 상태(피그마 Table Status). status: not-started|in-progress|done|cancel · variant: badge(StatusBadge)|dot(점 + 글자) */
  var TSTATUS = { 'not-started': ['neutral', '시작 전'], 'in-progress': ['accent', '진행 중'], done: ['positive', '완료'], cancel: ['negative', '취소'] };
  function TableStatus(p) {
    var s = TSTATUS[p.status || 'not-started'];
    return p.variant === 'dot' ? h('span', { className: 'ds-tstatus-dot ds-tstatus-dot--' + s[0] }, h('i', null), p.children || s[1]) : h(StatusBadge, { color: s[0] }, p.children || s[1]);
  }
  /* TableBadges — 배지 여러 개(피그마 Table Badge, 1~6개, 사이 4) */
  function TableBadges(p) { return h('span', { className: 'ds-tbadges' }, (p.items || []).map(function (t, i) { return h(CategoryBadge, { key: i, color: (t && t.color) || p.color || 'gray' }, (t && t.label) || t); })); }

  /* ───────── 차트(ECharts) ─────────
     ECharts 5.5(cdnjs)를 그리는 엔진으로 쓰고, 테마는 실행 중에 우리 토큰(CSS 변수)에서 읽는다.
     window.echarts가 없으면 한 번만 불러온다. 판 크기가 바뀌면 다시 그림(ResizeObserver), 동작 줄이기 설정이면 애니메이션 끔. */
  var EC_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js', ecWait = null;
  function loadECharts() {
    if (window.echarts) return Promise.resolve(window.echarts);
    if (!ecWait) ecWait = new Promise(function (res, rej) { var s = document.createElement('script'); s.src = EC_SRC; s.onload = function () { res(window.echarts); }; s.onerror = rej; document.head.appendChild(s); });
    return ecWait;
  }
  var tokCache = {};
  function tok(name) {  /* CSS 변수 → 실제 색(rgb) */
    if (tokCache[name]) return tokCache[name];
    var el = document.createElement('span'); el.style.cssText = 'position:absolute;visibility:hidden;color:var(--' + name + ')'; (document.querySelector('.ds-root') || document.body).appendChild(el);
    var c = getComputedStyle(el).color; el.remove(); return (tokCache[name] = c);
  }
  function fmtNum(v, unit) { if (v == null || v === '') return '-'; var n = typeof v === 'number' ? v.toLocaleString('ko-KR') : v; return unit ? n + unit : n; }
  function ecTooltip(unit, trigger) {
    return { trigger: trigger || 'axis', confine: true, backgroundColor: 'transparent', borderWidth: 0, padding: 0, extraCssText: 'box-shadow:none;',
      axisPointer: { type: 'shadow', shadowStyle: { color: tok('state-layers-on-neutral-hover') }, lineStyle: { color: tok('border-neutral-strong'), type: 'dashed' } },
      formatter: function (ps) {
        ps = [].concat(ps); var head = ps[0] && (ps[0].axisValueLabel || ps[0].name) || '';
        var rows = ps.map(function (q) { var v = Array.isArray(q.value) ? q.value[q.value.length - 1] : q.value; return '<div class="ds-ectip__row"><i style="background:' + q.color + '"></i><span>' + (q.seriesName && trigger !== 'item' ? q.seriesName : q.name) + '</span><b>' + fmtNum(v, unit) + (q.percent != null ? ' <em>(' + q.percent + '%)</em>' : '') + '</b></div>'; }).join('');
        return '<div class="ds-ectip">' + (trigger === 'item' ? '' : '<div class="ds-ectip__head">' + head + '</div>') + rows + '</div>';
      } };
  }
  function ecBase(p, w) {
    var narrow = w && w < 480;
    var muted = tok('text-body-subtle'), line = tok('divider-neutral-main'), grid = tok('divider-neutral-subtle');
    return {
      color: [1, 2, 3, 4, 5, 6].map(function (i) { return tok('chart-series-' + i); }),
      textStyle: { fontFamily: getComputedStyle(document.body).fontFamily, fontSize: 12, color: muted },
      animation: !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches), animationDuration: 500,
      grid: { left: 4, right: 8, top: p.legend === false ? 12 : 40, bottom: 4, containLabel: true },
      legend: p.legend === false ? undefined : { type: narrow ? 'scroll' : 'plain', top: 0, left: 0, right: 0, pageIconSize: 10, pageTextStyle: { color: muted }, icon: 'roundRect', itemWidth: 10, itemHeight: 10, itemGap: 16, textStyle: { color: tok('text-body-main'), fontSize: 13, lineHeight: 16 }, inactiveColor: tok('text-disabled') },  /* 범례 text-xs 13 */
      tooltip: ecTooltip(p.unit),
      _axis: { axisLine: { lineStyle: { color: line } }, axisTick: { show: false }, axisLabel: { color: muted, fontSize: narrow ? 11 : 12, margin: 8, hideOverlap: true }, splitLine: { lineStyle: { color: grid } } }
    };
  }
  /* Chart — ECharts 공통 판. option(완성 옵션) 또는 build(base, echarts)로 옵션을 만들어 준다. height · label(접근성 이름) */
  function Chart(p) {
    /* 반응형: 판 폭(w)을 재서 build(base, echarts, w)에 넘기고, heightFor(w)가 있으면 높이도 폭에 맞춘다 */
    var ref = React.useRef(null), inst = React.useRef(null), ws = React.useState(0), w = ws[0], setW = ws[1];
    React.useEffect(function () {
      var alive = true, ro;
      loadECharts().then(function (ec) {
        if (!alive || !ref.current) return;
        inst.current = ec.init(ref.current, null, { renderer: 'svg' });
        setW(Math.round(ref.current.parentNode.getBoundingClientRect().width));
        ro = new ResizeObserver(function (en) { var nw = Math.round(en[0].contentRect.width); setW(function (o) { return Math.abs(o - nw) > 1 ? nw : o; }); }); ro.observe(ref.current.parentNode);
      });
      return function () { alive = false; ro && ro.disconnect(); inst.current && inst.current.dispose(); inst.current = null; };
    }, []);
    var ht = p.heightFor && w ? p.heightFor(w) : (p.height || 240);
    React.useEffect(function () {
      if (!inst.current || !w) return;
      inst.current.resize();
      var base = ecBase(p, w); var o = p.build ? p.build(base, window.echarts, w) : Object.assign(base, p.option); delete o._axis; inst.current.setOption(o, true);
    });
    return h('div', { className: 'ds-chart ds-echart', role: 'img', 'aria-label': p.label, style: { height: ht } }, h('div', { ref: ref, style: { width: '100%', height: '100%' } }));
  }

  function axisOf(b, extra) { return Object.assign({}, b._axis, extra); }
  /* BarChart — 막대(세로 · 가로 · 누적). categories · series[{name,data,color}] · stacked · horizontal · unit · showValues · height · legend */
  function BarChart(p) {
    return h(Chart, Object.assign({}, p, { legend: p.legend != null ? p.legend : (p.series || []).length > 1, build: function (b) {
      var hz = p.horizontal, n = (p.series || []).length, cat = axisOf(b, { type: 'category', data: p.categories, splitLine: { show: false } }), val = axisOf(b, { type: 'value', axisLine: { show: false }, axisLabel: Object.assign({}, b._axis.axisLabel, { formatter: function (v) { return fmtNum(v); } }) });
      b.xAxis = hz ? val : cat; b.yAxis = hz ? Object.assign(cat, { inverse: true }) : val;
      var nar = arguments[2] && arguments[2] < 480;
      b.series = (p.series || []).map(function (s, i) { var top = !p.stacked || i === n - 1; return { type: 'bar', name: s.name, data: s.data, stack: p.stacked ? 'all' : undefined, barMaxWidth: nar ? 16 : 24, barGap: '20%', itemStyle: { color: s.color, borderRadius: top ? (hz ? [0, 4, 4, 0] : [4, 4, 0, 0]) : 0 }, label: p.showValues ? { show: true, position: hz ? 'right' : 'top', color: tok('text-body-main'), fontSize: 12, formatter: function (q) { return fmtNum(q.value); } } : undefined, emphasis: { focus: 'series' } }; });
      return b; } }));
  }
  /* LineChart — 선(면적 · 곡선 · 점). categories · series · area · smooth · unit · height */
  function LineChart(p) {
    return h(Chart, Object.assign({}, p, { legend: p.legend != null ? p.legend : (p.series || []).length > 1, build: function (b, ec) {
      b.tooltip.axisPointer = { type: 'line', lineStyle: { color: tok('border-neutral-strong'), type: 'dashed' } };
      b.xAxis = axisOf(b, { type: 'category', data: p.categories, boundaryGap: false, splitLine: { show: false } });
      b.yAxis = axisOf(b, { type: 'value', axisLine: { show: false }, axisLabel: Object.assign({}, b._axis.axisLabel, { formatter: function (v) { return fmtNum(v); } }) });
      b.series = (p.series || []).map(function (s, i) { var c = s.color || b.color[i % 6]; return { type: 'line', name: s.name, data: s.data, smooth: p.smooth !== false ? 0.3 : false, symbol: 'circle', symbolSize: 6, showSymbol: false, lineStyle: { width: 2, color: c }, itemStyle: { color: c, borderColor: tok('surface-main'), borderWidth: 2 }, areaStyle: p.area ? { color: new ec.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: c.replace('rgb(', 'rgba(').replace(')', ', 0.18)') }, { offset: 1, color: c.replace('rgb(', 'rgba(').replace(')', ', 0)') }]) } : undefined, emphasis: { focus: 'series' } }; });
      return b; } }));
  }
  /* DonutChart — 도넛(구성비). items[{name,value,color}] · centerValue · centerLabel · unit · height · legend(오른쪽 목록) */
  /* DonutChart — 도넛(구성비). 반응형: 판 폭이 (도넛 + 32 + 범례 폭)보다 좁으면 도넛 위 · 범례 아래(가운데, 줄바꿈)로 바뀌고 높이가 늘어난다 */
  function DonutChart(p) {
    var items = p.items || [], tot = items.reduce(function (a, x) { return a + x.value; }, 0);
    var H = p.height || p.size || 220, RMAX = Math.round(H * 0.42), RMIN = 64;
    var legW = Math.max.apply(null, items.map(function (x) { return (String(x.name).length * 13.5) + 12 + 5 + 8 + 36; }).concat([80]));  /* 범례 한 칸 폭 추정: 이름(13.5/자) + 네모 12 + 5 + 사이 8 + 비율 36 */
    /* 크기도 반응형: 옆 배치에서 자리가 모자라면 먼저 도넛을 줄이고(최소 반지름 64), 그래도 모자라면 위아래 배치 — 위아래 배치에서는 판 폭에 맞춰 다시 키움(최대 RMAX) */
    function geo(w) {
      if (p.legend === false) return { st: false, R: Math.max(40, Math.min(RMAX, Math.floor((w - 16) / 2))) };
      var side = Math.floor((w - 16 - 24 - legW) / 2);
      if (side >= RMIN) return { st: false, R: Math.min(RMAX, side) };
      return { st: true, R: Math.max(40, Math.min(RMAX, Math.floor((w - 16) / 2))) };
    }
    function stacked(w) { return geo(w).st; }
    function legRows(w) { var per = Math.max(1, Math.floor((w - 16) / (legW + 16))); return Math.ceil(items.length / per) + (per > 1 ? 0 : 0); }
    return h(Chart, Object.assign({}, p, { heightFor: function (w) { var g = geo(w); return g.st ? g.R * 2 + 16 + 12 + legRows(w) * 32 + 4 :  /* 범례 한 줄 = 글 20 + 줄 사이 12 */ Math.max(g.R * 2 + 16, Math.min(H, g.R * 2 + 40)); }, build: function (b, ec, w) {
      var g = geo(w), st = g.st, R = g.R, Hc = st ? 0 : Math.max(R * 2 + 16, Math.min(H, R * 2 + 40)), cx = p.legend === false || st ? '50%' : R + 8, cy = st ? R + 8 : '50%', ff = getComputedStyle(document.body).fontFamily;
      b.tooltip = ecTooltip(p.unit, 'item');
      b.legend = p.legend === false ? undefined : Object.assign({ icon: 'roundRect', itemWidth: 12, itemHeight: 12, itemGap: st ? 12 : 10, textStyle: { color: tok('text-body-main'), fontSize: 14, lineHeight: 20, rich: { v: { color: tok('text-body-subtle'), fontSize: 14, lineHeight: 20, padding: [0, 0, 0, 8] } } },
        formatter: function (nm) { var it = items.filter(function (x) { return x.name === nm; })[0]; return nm + '{v|' + (tot ? Math.round(it.value / tot * 100) : 0) + '%}'; } },
        st ? { orient: 'horizontal', left: 'center', top: R * 2 + 16 + 12, width: w - 16 } : { orient: 'vertical', left: R * 2 + 8 + 24, top: 'middle' });
      b.series = [{ type: 'pie', radius: [Math.round(R * 0.72), R], center: [cx, cy], avoidLabelOverlap: true, padAngle: 1, itemStyle: { borderRadius: 4, borderColor: tok('surface-main'), borderWidth: 2 }, label: { show: false }, emphasis: { scale: true, scaleSize: 4 }, data: items.map(function (x) { return { name: x.name, value: x.value, itemStyle: x.color ? { color: x.color } : undefined }; }) }];
      /* 가운데 글: 값(28) + 4 + 설명(16) 묶음의 가운데 = 고리 중심. 설명이 없으면 값 하나가 중심 */
      var ringCy = st ? R + 8 : Hc / 2;
      b.title = { text: p.centerValue != null ? String(p.centerValue) : fmtNum(tot), subtext: p.centerLabel || '', left: cx, top: Math.round(ringCy - (p.centerLabel ? 24 : 14)), textAlign: 'center', itemGap: 4, padding: 0,
        textStyle: { color: tok('text-heading-main'), fontSize: 20, fontWeight: 700, lineHeight: 28, fontFamily: ff }, subtextStyle: { color: tok('text-body-subtle'), fontSize: 12, lineHeight: 16, fontFamily: ff } };
      delete b.grid; return b; } }));
  }

  /* ComboChart — 막대 + 선(두 축). categories · bars[{name,data}] · lines[{name,data}] · unit · lineUnit */
  function ComboChart(p) {
    return h(Chart, Object.assign({}, p, { build: function (b) {
      b.xAxis = axisOf(b, { type: 'category', data: p.categories, splitLine: { show: false } });
      var fy = function (u) { return axisOf(b, { type: 'value', axisLine: { show: false }, axisLabel: Object.assign({}, b._axis.axisLabel, { formatter: function (v) { return fmtNum(v) + (u || ''); } }) }); };
      b.yAxis = [fy(p.unit), Object.assign(fy(p.lineUnit), { splitLine: { show: false } })];
      var nb = (p.bars || []).length;
      b.series = (p.bars || []).map(function (s) { return { type: 'bar', name: s.name, data: s.data, barMaxWidth: 24, itemStyle: { borderRadius: [4, 4, 0, 0] } }; })
        .concat((p.lines || []).map(function (s, i) { var c = b.color[(nb + i) % 6]; return { type: 'line', name: s.name, data: s.data, yAxisIndex: 1, smooth: 0.3, symbol: 'circle', symbolSize: 6, lineStyle: { width: 2, color: c }, itemStyle: { color: c, borderColor: tok('surface-main'), borderWidth: 2 } }; }));
      return b; } }));
  }
  /* HeatmapChart — 두 범주 교차 세기(요일 × 시간대 등). xCategories · yCategories · data[[x,y,v]] · unit. 색 = surface-primary-subtlest → fill-primary-main */
  function HeatmapChart(p) {
    return h(Chart, Object.assign({ legend: false }, p, { build: function (b) {
      b.tooltip = { trigger: 'item', confine: true, backgroundColor: 'transparent', borderWidth: 0, padding: 0, extraCssText: 'box-shadow:none;', formatter: function (q) { return '<div class="ds-ectip"><div class="ds-ectip__head">' + p.yCategories[q.value[1]] + ' · ' + p.xCategories[q.value[0]] + '</div><div class="ds-ectip__row"><i style="background:' + q.color + '"></i><span>' + (p.valueName || '값') + '</span><b>' + fmtNum(q.value[2], p.unit) + '</b></div></div>'; } };
      b.grid = { left: 4, right: 8, top: 8, bottom: 36, containLabel: true };
      b.xAxis = axisOf(b, { type: 'category', data: p.xCategories, splitArea: { show: false }, splitLine: { show: false } });
      b.yAxis = axisOf(b, { type: 'category', data: p.yCategories, inverse: true, axisLine: { show: false }, splitLine: { show: false } });
      var vals = (p.data || []).map(function (d) { return d[2]; });
      b.visualMap = { min: Math.min.apply(null, vals), max: Math.max.apply(null, vals), orient: 'horizontal', left: 'center', bottom: 0, itemWidth: 10, itemHeight: 120, calculable: false, textStyle: { color: tok('text-body-subtle'), fontSize: 12 }, inRange: { color: [tok('surface-primary-subtlest'), tok('fill-primary-main')] } };
      b.series = [{ type: 'heatmap', data: p.data, itemStyle: { borderColor: tok('surface-main'), borderWidth: 2, borderRadius: 4 }, emphasis: { itemStyle: { borderColor: tok('border-neutral-accent'), borderWidth: 1 } } }];
      return b; } }));
  }

  /* Accordion — 펼침 목록(피그마 Box Accordion · Text Accordion). variant: box|text · size: md|sm · title · children(내용) · open/defaultOpen · onToggle
     box: 여백 20/16(sm 18/16) · surface-main · hover state layer · 펼침 = surface-subtler + 제목 heading. text: 판 없이 제목만, hover 제목 · 아이콘 primary */
  function Accordion(p) {
    var ov = useValue({ value: p.open, defaultValue: !!p.defaultOpen, onChange: p.onToggle }), open = ov[0], id = React.useId ? React.useId() : 'acc' + Math.random().toString(36).slice(2);
    var size = p.size || 'md', box = (p.variant || 'box') === 'box';
    /* 열려 있을 때는 판 전체(내용 포함)를 눌러도 닫힘 — 단, 내용 안의 링크 · 버튼 · 입력을 누르거나 글을 드래그해 고른 경우는 제외 */
    function onBoxClick(e) {
      if (!open || e.target.closest('.ds-acc__head')) return;
      if (e.target.closest('a, button, input, select, textarea, label, [role="button"], [contenteditable]')) return;
      var sel = window.getSelection && window.getSelection(); if (sel && String(sel).length) return;
      ov[1](false);
    }
    return h('div', { className: cx('ds-acc', 'ds-acc--' + (box ? 'box' : 'text'), 'ds-acc--' + size, open && 'is-open', p.className), onClick: onBoxClick },
      h('button', { type: 'button', className: 'ds-acc__head', 'aria-expanded': open, 'aria-controls': id, onClick: function () { ov[1](!open); } },
        h('span', { className: 'ds-acc__title' }, p.title),
        h('span', { className: 'ds-acc__icon', 'aria-hidden': true }, h(Icon, { name: 'chevron-down' }))),
      /* 내용은 늘 그려 두고 높이를 0 ↔ 내용 높이로 부드럽게(grid-template-rows 0fr ↔ 1fr). 닫혀 있으면 inert로 초점 · 읽기에서 빠짐 */
      h('div', { className: 'ds-acc__panel', inert: open ? undefined : '' }, h('div', { className: 'ds-acc__inner' }, h('div', { id: id, role: 'region', className: 'ds-acc__body' }, p.children))));
  }
  /* Chip — 고른 조건 · 태그(피그마 Chip). variant: neutral(흰 판)|soft(회색 판)|ghost(판 없음)|primary(채움) · color: gray|brand · size: 2xs|xs|sm|md · shape: rounded|pill · border · icon · value(오른쪽 값) · onRemove(✕) · onClick */
  function Chip(p) {
    /* 선택 옵션(selectable): 새 모양 없이 기존 Chip 모양을 그대로 씀 — 꺼짐 = 지정한 variant · color, 켜짐 = primary · brand + 왼쪽 ✓.
       selected · defaultSelected · onChange(켜짐 여부). 누르면 켜고 끔, aria-pressed로 상태 전달 */
    var sv = useValue({ value: p.selected, defaultValue: !!p.defaultSelected, onChange: p.onChange }), on = p.selectable ? sv[0] : false;
    var size = p.size || 'md', clickable = p.selectable || p.onClick, Tag = clickable ? 'button' : 'span';
    var variant = on ? 'primary' : (p.variant || 'neutral'), color = on ? 'brand' : (p.color || 'gray'), icon = on ? 'check' : p.icon;
    return h(Tag, { type: clickable ? 'button' : undefined, 'aria-pressed': p.selectable ? on : undefined,
      onClick: clickable ? function (e) { if (p.selectable) sv[1](!on); p.onClick && p.onClick(e); } : undefined,
      className: cx('ds-chip', 'ds-chip--' + variant, 'ds-chip--' + color, 'ds-chip--' + size, p.shape === 'pill' && 'ds-chip--pill', p.border && 'ds-chip--border', clickable && 'is-clickable', on && 'is-selected') },
      icon ? h(Icon, { name: icon, className: 'ds-chip__icon' }) : null,
      h('span', { className: 'ds-chip__label' }, p.children, p.value != null ? h('b', { className: 'ds-chip__value' }, p.value) : null),
      p.onRemove ? h('span', { role: 'button', tabIndex: 0, 'aria-label': '지우기', className: 'ds-chip__remove', onClick: function (e) { e.stopPropagation(); p.onRemove(); }, onKeyDown: function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); p.onRemove(); } } }, h(Icon, { name: 'close' })) : null);
  }

  /* SocialBadge — 소셜 로그인 표시(피그마 Social Badge · Mini Social Badge). brand: kakao|naver|google · mini(18 네모 판 + 로고 10) · size(로고 크기, 기본 20). 브랜드 색은 각 회사 규정 색(예외) */
  var SOCIAL = {
    kakao: ['#FFD901', '<path d="M10.0024 1.55884C5.03244 1.55884 1.00244 4.68884 1.00244 8.54384C1.00244 10.9438 2.56244 13.0588 4.93244 14.3188L3.93244 17.9838C3.84244 18.3088 4.21244 18.5638 4.49744 18.3788L8.87244 15.4738C9.24244 15.5088 9.61744 15.5288 9.99744 15.5288C14.9674 15.5288 18.9974 12.3988 18.9974 8.54384C18.9974 4.68884 14.9724 1.55884 10.0024 1.55884Z" fill="black" fill-opacity="0.9"/>', '카카오'],
    naver: ['#03C75A', '<path d="M12.9974 10.594L6.74936 1.64001H1.56836V18.36H7.00236V9.40601L13.2504 18.36H18.4314V1.64001H12.9974V10.594Z" fill="#03C75A"/>', '네이버'],
    google: ['#FFFFFF', '<path d="M18.9999 10.2087C18.9999 9.55747 18.9415 8.93131 18.8329 8.3302H10.1836V11.8868H15.1261C14.909 13.0306 14.2578 13.999 13.281 14.6502V16.9629H16.2615C17.9981 15.3599 18.9999 13.0055 18.9999 10.2087Z" fill="#4285F4"/><path d="M10.1839 19.1836C12.6635 19.1836 14.7423 18.3654 16.2618 16.9628L13.2813 14.6502C12.4631 15.2012 11.4195 15.5352 10.1839 15.5352C7.79611 15.5352 5.76736 13.9239 5.04101 11.7532H1.98535V14.1242C3.49648 17.1214 6.59389 19.1836 10.1839 19.1836Z" fill="#34A853"/><path d="M5.04033 11.7449C4.85665 11.1939 4.74812 10.6095 4.74812 9.99999C4.74812 9.39053 4.85665 8.80611 5.04033 8.25509V5.88403H1.98467C1.35851 7.11965 0.999512 8.5139 0.999512 9.99999C0.999512 11.4861 1.35851 12.8803 1.98467 14.1159L4.36408 12.2625L5.04033 11.7449Z" fill="#FBBC05"/><path d="M10.1839 4.47306C11.5364 4.47306 12.7386 4.94059 13.6987 5.84226L16.3286 3.21239C14.734 1.7263 12.6635 0.816284 10.1839 0.816284C6.59388 0.816284 3.49648 2.87844 1.98535 5.884L5.04101 8.25506C5.76735 6.08437 7.79611 4.47306 10.1839 4.47306Z" fill="#EA4335"/>', '구글'] };
  function SocialBadge(p) {
    var b = SOCIAL[p.brand || 'kakao'], z = p.mini ? 10 : (p.size || 20);
    var logo = h('svg', { width: z, height: z, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true, dangerouslySetInnerHTML: { __html: p.mini && p.brand === 'naver' ? b[1].replace('#03C75A', '#FFFFFF') : b[1] } });
    return p.mini ? h('span', { className: 'ds-social-mini', role: 'img', 'aria-label': b[2] + ' 계정', style: { background: b[0] } }, logo) : h('span', { className: 'ds-social', role: 'img', 'aria-label': b[2] }, logo);
  }
  /* Profile — 사용자 표시(피그마 Profile Horizontal · Vertical). direction: horizontal|vertical · size: xs~2xl(Avatar 크기) · name · description · src · social(이름 옆 mini 소셜 배지) */
  function Profile(p) {
    var v = p.direction === 'vertical';
    return h('div', { className: cx('ds-profile', v && 'ds-profile--v') }, h(Avatar, { size: p.size || 'xl', src: p.src }),
      h('div', { className: 'ds-profile__text' }, h('span', { className: 'ds-profile__name' }, p.name, p.social ? h(SocialBadge, { brand: p.social, mini: true }) : null), p.description ? h('span', { className: 'ds-profile__desc' }, p.description) : null));
  }
  /* ProfileButton — 누르면 메뉴가 열리는 프로필(피그마 Profile Button). size · name · description · src · showImage · showLabel · icon(오른쪽, 기본 chevron-down) · onClick */
  function ProfileButton(p) {
    return h('button', { type: 'button', className: 'ds-profile-btn ds-profile-btn--full', onClick: p.onClick, 'aria-haspopup': p.menu ? 'menu' : undefined },
      p.showImage !== false ? h(Avatar, { size: p.size || 'md', src: p.src }) : null,
      p.showLabel !== false ? h('span', { className: 'ds-profile__text' }, h('span', { className: 'ds-profile__name' }, p.name), p.description ? h('span', { className: 'ds-profile__desc' }, p.description) : null) : null,
      p.icon !== false ? h(Icon, { name: p.icon || 'chevron-down', className: 'ds-gnb__caret' }) : null);
  }

  /* Slider — 값 고르기(피그마 SliderBar · SliderRange · SliderPoints). 하나(value) 또는 범위(range: [시작, 끝]).
     min · max · step · points(눈금 수 또는 [이름]) · disabled · showValue: focus(기본, 잡거나 초점일 때 값 표시)|always|none · format(v) · onChange
     막대 4 · surface-subtler · 채움 fill-primary-main · 손잡이 20(흰 원 · border-neutral-strong · elevation-2, 초점 border-neutral-stronger) · 값 상자 surface-main · border-neutral-strong · rounded-md · text-xs */
  function Slider(p) {
    var min = p.min != null ? p.min : 0, max = p.max != null ? p.max : 100, step = p.step || 1, isR = !!p.range;
    var uv = useValue({ value: p.value, defaultValue: p.defaultValue != null ? p.defaultValue : (isR ? [min, max] : min), onChange: p.onChange }), val = uv[0];
    var vals = isR ? val : [val], track = React.useRef(null), ds = React.useState(-1), drag = ds[0], setDrag = ds[1], fs = React.useState(-1), foc = fs[0], setFoc = fs[1];
    var fmt = p.format || function (v) { return v; };
    function pct(v) { return (v - min) / (max - min) * 100; }
    function snap(v) { v = Math.round((v - min) / step) * step + min; return Math.max(min, Math.min(max, +v.toFixed(6))); }
    function setAt(i, v) { v = snap(v); if (!isR) return uv[1](v); var n = vals.slice(); n[i] = i === 0 ? Math.min(v, n[1]) : Math.max(v, n[0]); uv[1](n); }
    function fromX(x) { var r = track.current.getBoundingClientRect(); return min + (x - r.left) / r.width * (max - min); }
    function down(e) {
      if (p.disabled) return; var v = fromX(e.clientX), i = isR ? (Math.abs(v - vals[0]) <= Math.abs(v - vals[1]) ? 0 : 1) : 0;
      setAt(i, v); setDrag(i); e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
      var hs = track.current.querySelectorAll('.ds-slider__handle'); hs[i] && hs[i].focus();
    }
    function move(e) { if (drag >= 0) setAt(drag, fromX(e.clientX)); }
    function key(i, e) {
      var big = (max - min) / 10, d = { ArrowRight: step, ArrowUp: step, ArrowLeft: -step, ArrowDown: -step, PageUp: big, PageDown: -big }[e.key];
      if (e.key === 'Home') d = min - vals[i]; if (e.key === 'End') d = max - vals[i]; if (d == null) return; e.preventDefault(); setAt(i, vals[i] + d);
    }
    var lo = isR ? pct(vals[0]) : 0, hi = pct(vals[isR ? 1 : 0]), sv = p.showValue || 'focus';
    var pts = p.points ? (Array.isArray(p.points) ? p.points : Array.from({ length: p.points }, function (_, i) { return Math.round((min + (max - min) * i / (p.points - 1)) * 100) / 100; })) : null;
    return h('div', { className: cx('ds-slider', p.disabled && 'is-disabled', sv === 'always' && 'has-value', p.className) },
      h('div', { ref: track, className: 'ds-slider__track', onPointerDown: down, onPointerMove: move, onPointerUp: function () { setDrag(-1); }, onPointerCancel: function () { setDrag(-1); } },
        h('div', { className: 'ds-slider__fill', style: { left: lo + '%', width: (hi - lo) + '%' } }),
        vals.map(function (v, i) {
          var show = sv === 'always' || (sv === 'focus' && (drag === i || foc === i));
          return h('div', { key: i, role: 'slider', tabIndex: p.disabled ? -1 : 0, className: cx('ds-slider__handle', (drag === i || foc === i) && 'is-focus'), style: { left: pct(v) + '%' },
            'aria-valuemin': min, 'aria-valuemax': max, 'aria-valuenow': v, 'aria-valuetext': String(fmt(v)), 'aria-label': p.label ? (isR ? p.label + (i ? ' 끝' : ' 시작') : p.label) : undefined, 'aria-disabled': p.disabled || undefined,
            onKeyDown: function (e) { key(i, e); }, onFocus: function () { setFoc(i); }, onBlur: function () { setFoc(-1); } },
            show ? h('span', { className: 'ds-slider__value ds-num' }, fmt(v)) : null);
        })),
      pts ? h('div', { className: 'ds-slider__points' }, pts.map(function (t, i) { return h('span', { key: i, style: { left: (i / (pts.length - 1) * 100) + '%' } }, h('i'), h('b', null, t)); })) : null);
  }
  /* SliderField — 이름 · 설명 · 현재 값 + Slider(피그마 Slider/Circle · Slider/Range). label · description · 나머지는 Slider props. 값 표시 = 오른쪽 text-base medium primary */
  function SliderField(p) {
    var min = p.min != null ? p.min : 0, max = p.max != null ? p.max : 100;
    var uv = useValue({ value: p.value, defaultValue: p.defaultValue != null ? p.defaultValue : (p.range ? [min, max] : min), onChange: p.onChange }), v = uv[0], fmt = p.format || function (x) { return x; };
    return h('div', { className: 'ds-sfield' },
      h('div', { className: 'ds-sfield__head' },
        h('div', { className: 'ds-sfield__label' }, h('span', { className: 'ds-sfield__name' }, p.label), p.description ? h('span', { className: 'ds-sfield__desc' }, p.description) : null),
        h('span', { className: 'ds-sfield__val ds-num', 'aria-live': 'polite' }, p.range ? fmt(v[0]) + ' - ' + fmt(v[1]) : fmt(v))),
      h(Slider, Object.assign({}, p, { value: v, onChange: uv[1], defaultValue: undefined })));
  }

  /* ───────── 지도(Map) ─────────
     실제 지도는 지도 라이브러리(카카오 · 네이버 등)가 그리고, 디자인시스템은 그 위에 얹는 표시 · 검색 · 패널 · 배치를 맡는다.
     반응형: MapLayout · MapSearch · LocationSelector는 판 폭(container query 또는 측정)으로 PC ↔ 모바일 배치가 바뀐다. */
  function useWidth(ref) { var ws = React.useState(0); React.useEffect(function () { if (!ref.current) return; var ro = new ResizeObserver(function (en) { ws[1](Math.round(en[0].contentRect.width)); }); ro.observe(ref.current); return function () { ro.disconnect(); }; }, []); return ws[0]; }
  /* 지도 위 말풍선(Top Badge): surface-inverse-main + 흰 text-sm semibold, 여백 2/8, 아래 꼬리 */
  function MapTip(p) { return h('span', { className: 'ds-maptip' }, p.children); }
  /* MapCluster — 원형 묶음(피그마 Indicator/Circle Cluster). size 76|96|120|150|180 · count · label · active · onClick */
  function MapCluster(p) {
    var z = p.size || 96, big = z >= 120;
    return h('button', { type: 'button', className: cx('ds-mcluster', p.active && 'is-active', p.scale && 'has-ring'), style: { width: z, height: z }, onClick: p.onClick, 'aria-pressed': p.active },
      p.label ? h('span', { className: 'ds-mcluster__label' }, p.label) : null, h('b', { className: cx('ds-num', big && 'is-big') }, p.count));
  }
  /* MapRectCluster — 네모 묶음(피그마 Indicator/Rectangle Cluster). variant outline|solid · count · label · badge(MapBadge props) · tip */
  function MapRectCluster(p) {
    return h('span', { className: 'ds-mpin' }, p.tip ? h(MapTip, null, p.tip) : null,
      h('button', { type: 'button', className: cx('ds-mrect', p.variant === 'solid' && 'is-solid'), onClick: p.onClick },
        p.label ? h('span', { className: 'ds-mrect__label' }, p.label) : null, h('b', { className: 'ds-num' }, p.count), p.badge ? h(MapBadge, p.badge) : null));
  }
  /* MapBadge — 지도용 작은 표(피그마 _Base/Badge). type basic|up|down · solid · icon · children. 증감은 increase/decrease 색 */
  function MapBadge(p) { var t = p.type || 'basic'; return h('span', { className: cx('ds-mbadge', 'ds-mbadge--' + t, p.solid && 'is-solid') }, p.icon ? h(Icon, { name: p.icon }) : null, p.children || p.label); }
  /* MapMarker — 핀(피그마 Indicator/Minimal Marker). active · name(아래 이름) · tip(위 말풍선) · icon(가운데 아이콘, 없으면 점) */
  function MapMarker(p) {
    var on = !!p.active, stroke = on ? 'var(--border-primary-accent)' : 'var(--border-neutral-strong)', fill = on ? 'var(--bg-main)' : 'var(--fill-primary-main)', dot = on ? 'var(--fill-primary-main)' : 'var(--icon-on-primary)';
    return h('span', { className: cx('ds-mpin', 'ds-mmarker', on && 'is-active') }, p.tip ? h(MapTip, null, p.tip) : null,
      h('button', { type: 'button', className: 'ds-mmarker__pin', 'aria-label': p.name || '위치', 'aria-pressed': on, onClick: p.onClick },
        h('svg', { width: 34, height: 42, viewBox: '0 0 34 42', 'aria-hidden': true }, h('path', { d: 'M17 1C25.8 1 33 8.4 33 17.6C33 22.4 30.4 26.9 27 31C23.7 35.1 19.7 38.6 17 41C14.3 38.6 10.3 35.1 7 31C3.6 26.9 1 22.4 1 17.6C1 8.4 8.2 1 17 1Z', fill: fill, stroke: stroke, strokeWidth: 2 }), p.icon ? null : h('circle', { cx: 17, cy: 17, r: 5, fill: dot })),
        p.icon ? h(Icon, { name: p.icon, className: 'ds-mmarker__icon' }) : null, h('i', { className: 'ds-mmarker__shadow' })),
      p.name ? h('span', { className: 'ds-mmarker__name' }, p.name) : null);
  }
  /* MapCallout — 값 말풍선(피그마 Indicator/Callout Marker). variant outline|solid · title(위 파란 머리) · label · value · sub · tip · badges */
  function MapCallout(p) {
    return h('span', { className: 'ds-mpin' }, p.tip ? h(MapTip, null, p.tip) : null,
      h('button', { type: 'button', className: cx('ds-mcallout', p.variant === 'solid' && 'is-solid', p.title && 'has-title'), onClick: p.onClick },
        p.title ? h('span', { className: 'ds-mcallout__title' }, p.title) : null,
        h('span', { className: 'ds-mcallout__body' }, p.label ? h('span', { className: 'ds-mcallout__label' }, p.label) : null, h('b', { className: 'ds-num' }, p.value), p.sub ? h('span', { className: 'ds-mcallout__label' }, p.sub) : null),
        p.badges ? h('span', { className: 'ds-mcallout__badges' }, p.badges.map(function (b, i) { return h(MapBadge, Object.assign({ key: i }, b)); })) : null));
  }
  /* MapMenu — 지도 오른쪽 도구(피그마 Menu Area · _Base/Map Menu). groups[[{icon,label,active,onClick}]] · zoom(onZoomIn/onZoomOut) — 버튼 48(아이콘 18 + text-2xs), 묶음 사이 12, 판 surface-main · border-neutral-main · rounded-xl(12) · elevation-1 */
  function MapMenu(p) {
    var groups = (p.groups || []).map(function (g, gi) {
      return h('div', { key: gi, className: 'ds-mmenu__group' }, g.map(function (it, i) { return h('button', { key: i, type: 'button', className: cx('ds-mmenu__btn', it.active && 'is-active'), 'aria-pressed': it.active, onClick: it.onClick, 'aria-label': it.label }, h(Icon, { name: it.icon }), it.label && !p.compact ? h('span', null, it.label) : null); }));
    });
    if (p.zoom) groups.push(h('div', { key: 'z', className: 'ds-mmenu__group' }, h('button', { type: 'button', className: 'ds-mmenu__btn', 'aria-label': '확대', onClick: p.onZoomIn }, h(Icon, { name: 'add' })), h('button', { type: 'button', className: 'ds-mmenu__btn', 'aria-label': '축소', onClick: p.onZoomOut }, h(Icon, { name: 'subtract' }))));
    return h('div', { className: cx('ds-mmenu', p.compact && 'is-compact') }, groups);
  }
  /* MapListItem — 지도 목록 한 줄(피그마 Map List). title · addresses[] · labels[](세로선으로 구분) · badges[] · thumbnail · onClick. 여백 20 · 사이 8, 아래 구분선 */
  function MapListItem(p) {
    return h('button', { type: 'button', className: cx('ds-mlist-item', p.active && 'is-active'), onClick: p.onClick },
      h('span', { className: 'ds-mlist-item__text' },
        h('span', { className: 'ds-mlist-item__head' }, p.avatar ? h('span', { className: 'ds-mlist-item__avatar', style: typeof p.avatar === 'string' ? { background: 'center / cover url(' + p.avatar + ')' } : undefined, 'aria-hidden': true }) : null, h('b', { className: 'ds-mlist-item__title' }, p.title)),
        p.addresses ? h('span', { className: 'ds-mlist-item__addr' }, p.addresses.map(function (a, i) { return h('span', { key: i }, a); })) : null,
        p.labels ? h('span', { className: 'ds-mlist-item__labels' }, p.labels.map(function (l, i) { return h(React.Fragment, { key: i }, i ? h('i') : null, h('span', null, l)); })) : null,
        p.badges ? h('span', { className: 'ds-mlist-item__badges' }, p.badges.map(function (b, i) { return h(CategoryBadge, { key: i, color: 'white', border: true }, b); })) : null),
      p.thumbnail ? h('span', { className: 'ds-mlist-item__thumb', style: { backgroundImage: 'url(' + p.thumbnail + ')' } }) : null);
  }
  /* MapSearch — 지도 검색(피그마 Map Search/Basic · SearchMap/Logo · Mobile/Map Search). variant basic|soft|floating · logo · results[{title, highlight, address, badge}] · onSelect · onBack · mobile
     반응형: MapLayout 안에서는 지도 화면 폭 600 미만, 혼자 쓸 때는 창 폭 600 미만(또는 mobile)이면 모바일 형태 — 높이 56 막대(뒤로 버튼 + 입력), 결과는 아래로 꽉 차는 목록 */
  function MapSearch(p) {
    /* 모바일 여부: mobile을 주면 그대로(MapLayout이 화면 폭으로 정해 넘김), 없으면 화면(창) 폭 600 미만일 때 */
    var ref = React.useRef(null), inRef = React.useRef(null), mob = p.mobile != null ? !!p.mobile : (typeof window !== 'undefined' && window.innerWidth < 600);
    var vs = useValue({ value: p.value, defaultValue: p.defaultValue || '', onChange: p.onChange }), q = vs[0], fs = React.useState(false), foc = fs[0], setFoc = fs[1];
    /* 모바일 흐름: 지도 화면의 검색 막대를 누르면 검색 화면(전체 화면)으로 → 뒤로가기 · 결과 선택 시 지도 화면으로 */
    var ss = React.useState(!!p.defaultScreenOpen), screen = mob && ss[0], setScreen = ss[1];
    var rs = React.useState(p.recent || []), recent = rs[0], setRecent = rs[1];
    React.useEffect(function () { if (screen && inRef.current) inRef.current.focus(); }, [screen]);
    var res = (p.results || []).filter(function (r) { return !q || (r.title + (r.address || '')).indexOf(q) >= 0; });
    var open = (foc || p.open) && q && res.length;
    function hl(t) { if (!q) return t; var i = t.indexOf(q); return i < 0 ? t : [t.slice(0, i), h('mark', { key: 'm' }, q), t.slice(i + q.length)]; }
    function choose(r) { vs[1](r.title); setFoc(false); setScreen(false); setRecent([r.title].concat(recent.filter(function (x) { return x !== r.title; })).slice(0, 8)); p.onSelect && p.onSelect(r); }
    function item(r, i) {
      return h('button', { key: i, type: 'button', role: 'option', className: 'ds-msearch__item', onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { choose(r); } },
        h(Icon, { name: 'map-pin-2', className: 'ds-msearch__item-icon' }),
        h('span', { className: 'ds-msearch__item-text' }, h('span', { className: 'ds-msearch__item-title' }, hl(r.title)), r.address ? h('span', { className: 'ds-msearch__item-addr' }, r.address) : null),
        r.badge ? h(CategoryBadge, { color: 'white', border: true }, r.badge) : null);
    }
    var clear = q ? h(IconButton, { icon: 'close', size: '2xs', label: '지우기', onClick: function () { vs[1](''); inRef.current && inRef.current.focus(); } }) : null;
    var lead = p.logo ? h('span', { className: 'ds-msearch__logo' }, p.logo) : h(Icon, { name: 'search', className: 'ds-msearch__icon' });
    if (mob) {
      /* 지도 화면: 누르면 검색 화면이 열리는 막대(입력 대신 버튼) */
      var bar = h('div', { className: 'ds-msearch__bar' },
        h('button', { type: 'button', className: 'ds-msearch__box ds-msearch__box--fake', onClick: function () { setScreen(true); }, 'aria-label': '검색 화면 열기' }, lead, h('span', { className: cx('ds-msearch__fake', q && 'is-filled') }, q || p.placeholder || '지역, 주소, 상호를 검색하세요')),
        p.trailing || null);
      var scr = screen ? h('div', { className: 'ds-msearch__screen', role: 'dialog', 'aria-modal': true, 'aria-label': '검색' },
        h('div', { className: 'ds-msearch__screen-bar' },
          h(IconButton, { icon: 'arrow-left', size: 'lg', label: '지도로 돌아가기', onClick: function () { setScreen(false); p.onBack && p.onBack(); } }),
          h('div', { className: 'ds-msearch__box ds-msearch__box--soft is-focus' }, h('input', { ref: inRef, className: 'ds-msearch__input', value: q, placeholder: p.placeholder || '지역, 주소, 상호를 검색하세요', onChange: function (e) { vs[1](e.target.value); }, 'aria-label': '검색어', enterKeyHint: 'search', onKeyDown: function (e) { if (e.key === 'Enter' && res[0]) choose(res[0]); if (e.key === 'Escape') setScreen(false); } }), clear)),
        h('div', { className: 'ds-msearch__screen-body' },
          q ? (res.length ? h('div', { role: 'listbox' }, res.map(item)) : h('p', { className: 'ds-msearch__empty' }, '"' + q + '" 검색 결과가 없어요'))
            : h('div', { className: 'ds-msearch__recent' },
              h('div', { className: 'ds-msearch__recent-head' }, h('b', null, '최근 검색'), recent.length ? h(TextButton, { size: '2xs', color: 'neutral-subtle', onClick: function () { setRecent([]); } }, '전체 삭제') : null),
              recent.length ? recent.map(function (t, i) {
                return h('div', { key: t, className: 'ds-msearch__recent-item' },
                  h('button', { type: 'button', className: 'ds-msearch__recent-text', onClick: function () { vs[1](t); } }, h(Icon, { name: 'search' }), h('span', null, t)),
                  h(IconButton, { icon: 'close', size: '2xs', color: 'neutral-subtle', label: t + ' 지우기', onClick: function () { setRecent(recent.filter(function (x) { return x !== t; })); } }));
              }) : h('p', { className: 'ds-msearch__empty' }, '최근 검색한 기록이 없어요')))) : null;
      return h('div', { ref: ref, className: cx('ds-msearch', 'is-mobile', screen && 'is-screen') }, bar, scr);
    }
    var input = h('div', { className: cx('ds-msearch__box', 'ds-msearch__box--' + (p.variant || 'floating'), (foc || open) && 'is-focus') }, lead,
      h('input', { ref: inRef, className: 'ds-msearch__input', value: q, placeholder: p.placeholder || '지역, 주소, 상호를 검색하세요', onChange: function (e) { vs[1](e.target.value); }, onFocus: function () { setFoc(true); }, onBlur: function () { setTimeout(function () { setFoc(false); }, 150); }, 'aria-label': '지도 검색', role: 'combobox', 'aria-expanded': !!open }), clear);
    return h('div', { ref: ref, className: cx('ds-msearch', open && 'is-open') }, input, open ? h('div', { className: 'ds-msearch__results', role: 'listbox' }, res.map(item)) : null);
  }

  /* LocationSelector — 지역 고르기(피그마 Location selector/Navigation · Select Item). data { 시도: { 시군구: [읍면동] } } · value [시도, 시군구, 읍면동] · onApply
     위 단계 칩(📍 시도 › 시군구 › 읍면동, 누르면 그 단계로) + 버튼 3열 격자(높이 40) + 적용 버튼. 반응형: 판 폭 360 이상이면 폭 320 떠 있는 판, 좁으면 꽉 채움 */
  function LocationSelector(p) {
    var data = p.data || {}, vs = React.useState(p.defaultValue || []), val = vs[0], setVal = vs[1], ls = React.useState(Math.min((p.defaultValue || []).length, 2)), lv = ls[0], setLv = ls[1];
    var LV = ['시도', '시군구', '읍면동'];
    var opts = lv === 0 ? Object.keys(data) : lv === 1 ? Object.keys(data[val[0]] || {}) : ((data[val[0]] || {})[val[1]] || []);
    function pick(o) { var n = val.slice(0, lv); n[lv] = o; setVal(n); if (lv < 2) setLv(lv + 1); }
    return h('div', { className: 'ds-locsel' },
      h('div', { className: 'ds-locsel__nav' }, h(Icon, { name: 'map-pin-2' }), LV.map(function (l, i) {
        return h(React.Fragment, { key: i }, i ? h(Icon, { name: 'chevron-right', className: 'ds-locsel__sep' }) : null,
          h('button', { type: 'button', disabled: i > val.length, className: cx('ds-locsel__step', lv === i && 'is-current', val[i] && 'is-done'), onClick: function () { setLv(i); } }, val[i] || l));
      })),
      h('div', { className: 'ds-locsel__grid', role: 'listbox', 'aria-label': LV[lv] }, opts.map(function (o) { return h('button', { key: o, type: 'button', role: 'option', 'aria-selected': val[lv] === o, className: cx('ds-locsel__opt', val[lv] === o && 'is-selected'), onClick: function () { pick(o); } }, o); })),
      h('div', { className: 'ds-locsel__foot' }, h(Button, { color: 'primary', variant: 'solid', size: 'lg', fullWidth: true, disabled: !val.length, onClick: function () { p.onApply && p.onApply(val); } }, (val.length ? val.join(' ') + ' ' : '') + '적용')));
  }
  /* MapLayout — 지도 화면 배치(Templates v2.1 "지도 레이아웃": Floating type · Side pannel type · 보고서 펼친 상태).
     규칙: 지도는 늘 화면 100% · 패널을 접으면 "현 지도에서 검색" 버튼이 지도 위에 나옴 · 필터는 검색창과 함께 이동 · 보고서는 필터 위를 덮으며 열림 · 보고서가 열린 채로 접으면 패널까지 한 번에 접힘.
     type: floating(검색 + 필터만 떠 있음)|panel(왼쪽 목록 패널 375 + 안에 검색) · map · search · filters[{label, active, onClick}] · list(패널 목록) · report{title, content, onClose}
     topTools(오른쪽 위: 프로필 · 측정 도구) · bottomTools(오른쪽 아래: 내 위치 · 확대) · onSearchHere · children(지도 위 표시)
     반응형(판 폭): 1024 이상 = 패널 375 · 보고서 390이 옆에 붙음 / 768~1023 = 패널 320 · 보고서는 패널 위에 겹쳐 열림 / 768 미만 = 검색 위 막대 + 필터 가로 스크롤, 목록은 아래 시트, 보고서는 전체 화면 */
  function MapLayout(p) {
    var ref = React.useRef(null), w = useWidth(ref), mob = w > 0 && w < 768, tab = w >= 768 && w < 1024, panelType = p.type === 'panel';
    var os = React.useState(p.defaultPanelOpen !== false), open = os[0], setOpen = os[1], es = React.useState(false), exp = es[0], setExp = es[1];
    var rs = React.useState(!!p.defaultReportOpen), repOpen = rs[0] && !!p.report, setRep = rs[1];
    var panelW = tab ? 320 : 375, panelShown = panelType && open && !mob;
    /* 모바일 도구: 확대 · 축소는 없앰(두 손가락), 내 정보는 검색 막대 오른쪽(profile), 측정 · 커스텀은 '더보기' 하나로 접고(mobileTools) 누르면 펼침, 내 위치(onLocate)만 오른쪽 아래 */
    var ms = React.useState(false), more = ms[0], setMore = ms[1], moreRef = React.useRef(null);
    React.useEffect(function () { if (!more) return; function d(ev) { if (moreRef.current && !moreRef.current.contains(ev.target)) setMore(false); } function k(ev) { if (ev.key === 'Escape') setMore(false); } document.addEventListener('mousedown', d); document.addEventListener('keydown', k); return function () { document.removeEventListener('mousedown', d); document.removeEventListener('keydown', k); }; }, [more]);
    var left = mob ? 0 : (panelShown ? panelW : 0) + (repOpen && !tab && open ? 390 : 0);
    function collapseAll() { setOpen(false); setRep(false); }
    var searchEl = p.search && React.isValidElement(p.search) ? React.cloneElement(p.search, { mobile: mob }) : p.search;
    /* 필터: 누르면 아래로 선택 판(제목 = 필터 이름 · 항목 목록, 고른 항목 primary semibold + chevron-right). 고르면 버튼에 고른 값이 보이고 primary 테두리 · 연한 판으로 바뀜. 바깥 누르기 · Esc로 닫힘 */
    var fvs = React.useState(function () { var o = {}; (p.filters || []).forEach(function (f, i) { if (f.defaultValue != null) o[i] = f.defaultValue; }); return o; }), fv = fvs[0], setFv = fvs[1];
    var ofs = React.useState(null), of = ofs[0], setOf = ofs[1];
    React.useEffect(function () { if (!of) return; function d(ev) { if (!ev.target.closest('.ds-mlayout__fpanel, .ds-mlayout__filters')) setOf(null); } function k(ev) { if (ev.key === 'Escape') setOf(null); } document.addEventListener('mousedown', d); document.addEventListener('keydown', k); return function () { document.removeEventListener('mousedown', d); document.removeEventListener('keydown', k); }; }, [of]);
    function openF(i, ev) { setSub && null; if (of && of.i === i) return setOf(null); var r = ev.currentTarget.getBoundingClientRect(), L = ref.current.getBoundingClientRect(); setOf({ i: i, left: Math.max(8, Math.min(r.left - L.left, L.width - 228)), top: r.bottom - L.top + 4 }); }
    var filters = p.filters ? h('div', { className: 'ds-mlayout__filters', role: 'toolbar', 'aria-label': '필터' }, p.filters.map(function (f, i) {
      var val = f.value != null ? f.value : fv[i], has = val != null && val !== '';
      return h(ToggleButton, { key: i, variant: 'base', color: 'primary', size: mob ? 'md' : 'xl', active: has || f.active, className: cx(of && of.i === i && 'is-open'), iconLeft: f.icon, 'aria-haspopup': f.options ? 'listbox' : undefined, 'aria-expanded': f.options ? !!(of && of.i === i) : undefined, onClick: f.options ? function (ev) { openF(i, ev); } : f.onClick }, has ? val : f.label);
    })) : null;
    /* 항목은 문자열 또는 { label, children:[…] } — 하위 항목이 있으면 › 표시, 마우스를 올리거나 누르면 오른쪽에 하위 판이 펼쳐짐(모바일은 아래로 펼침). 하위를 고르면 값 = "상위 · 하위" */
    var sbs = React.useState(null), sub = sbs[0], setSub = sbs[1];
    var fpanel = of && p.filters[of.i] && p.filters[of.i].options ? (function () {
      var f = p.filters[of.i], cur = f.value != null ? f.value : fv[of.i];
      function lab(o) { return typeof o === 'string' ? o : o.label; }
      function pick(v) { var n = Object.assign({}, fv); n[of.i] = v; setFv(n); setOf(null); setSub(null); f.onChange && f.onChange(v); }
      var rows = f.options.map(function (o, oi) {
        var L = lab(o), kids = typeof o === 'string' ? null : o.children, on = cur === L || (cur && cur.indexOf(L + ' · ') === 0), openSub = kids && sub === oi;
        var row = h('button', { key: 'r' + oi, type: 'button', role: kids ? 'menuitem' : 'option', 'aria-selected': kids ? undefined : on, 'aria-haspopup': kids ? 'listbox' : undefined, 'aria-expanded': kids ? !!openSub : undefined,
          className: cx('ds-mlayout__fopt', on && 'is-selected', openSub && 'is-open'),
          onMouseEnter: !mob ? function () { setSub(kids ? oi : null); } : undefined,
          onClick: function () { if (kids) setSub(openSub ? null : oi); else pick(L); } }, h('span', null, L), kids ? h(Icon, { name: mob ? (openSub ? 'chevron-down' : 'chevron-right') : 'chevron-right' }) : null);
        var subList = openSub ? kids.map(function (c) { var v = L + ' · ' + c, con = cur === v; return h('button', { key: c, type: 'button', role: 'option', 'aria-selected': con, className: cx('ds-mlayout__fopt', 'is-sub', con && 'is-selected'), onClick: function () { pick(v); } }, h('span', null, c)); }) : null;
        return mob ? [row, subList] : row;
      });
      var subPanel = !mob && sub != null && f.options[sub] && f.options[sub].children ? h('div', { className: 'ds-mlayout__fpanel ds-mlayout__fpanel--sub', role: 'listbox', 'aria-label': lab(f.options[sub]), style: { left: of.left + 224, top: of.top + 52 + sub * 40 } },
        f.options[sub].children.map(function (c) { var v = lab(f.options[sub]) + ' · ' + c, con = cur === v; return h('button', { key: c, type: 'button', role: 'option', 'aria-selected': con, className: cx('ds-mlayout__fopt', con && 'is-selected'), onClick: function () { pick(v); } }, h('span', null, c)); })) : null;
      return [h('div', { key: 'p', className: 'ds-mlayout__fpanel', role: 'listbox', 'aria-label': f.title || f.label, style: { left: of.left, top: of.top } }, h('b', { className: 'ds-mlayout__fpanel-title' }, f.title || f.label), rows), subPanel];
    })() : null;
    var report = repOpen ? h('section', { className: 'ds-mlayout__report', 'aria-label': p.report.title },
      h('div', { className: 'ds-mlayout__report-head' }, mob ? h(IconButton, { icon: 'arrow-left', size: 'lg', label: '뒤로', onClick: function () { setRep(false); } }) : null, h('b', null, p.report.title), !mob ? h(IconButton, { icon: 'close', size: 'sm', label: '닫기', onClick: function () { setRep(false); p.report.onClose && p.report.onClose(); } }) : null),
      h('div', { className: 'ds-mlayout__report-body' }, p.report.content),
      !mob && !tab ? h('button', { type: 'button', className: 'ds-mlayout__toggle', 'aria-label': '모두 접기', onClick: collapseAll }, h(Icon, { name: 'chevron-left' })) : null) : null;
    return h('div', { ref: ref, className: cx('ds-mlayout', mob ? 'is-mobile' : tab ? 'is-tab' : 'is-wide', panelType ? 'is-panel' : 'is-floating', open && 'is-panel-open', exp && 'is-expanded', repOpen && 'is-report-open'), style: { height: p.height || 560, '--ml-left': left + 'px', '--ml-panel': panelW + 'px' } },
      h('div', { className: 'ds-mlayout__map' }, p.map || h('div', { className: 'ds-mapbg', 'aria-hidden': true }), h('div', { className: 'ds-mlayout__overlay' }, p.children)),
      /* 위 줄: (패널을 접었거나 floating일 때) 검색 + 필터 — 필터는 검색 오른쪽에서 함께 움직임 */
      h('div', { className: 'ds-mlayout__top' },
        (!panelType || !open || mob) && searchEl ? h('div', { className: 'ds-mlayout__search' }, mob && p.profile && React.isValidElement(searchEl) ? React.cloneElement(searchEl, { trailing: p.profile }) : searchEl) : null,
        filters,
        panelType && !open && !mob && p.onSearchHere !== false ? h('div', { className: 'ds-mlayout__here' }, h(Button, { color: 'primary', variant: 'outline', size: 'sm', shape: 'pill', onClick: p.onSearchHere }, '현 지도에서 검색')) : null),
      !mob && p.topTools ? h('div', { className: 'ds-mlayout__tools ds-mlayout__tools--top' }, p.topTools) : null,
      !mob && p.bottomTools ? h('div', { className: 'ds-mlayout__tools ds-mlayout__tools--bottom' }, p.bottomTools) : null,
      mob && p.mobileTools ? h('div', { ref: moreRef, className: 'ds-mlayout__tools ds-mlayout__tools--top ds-mlayout__more' },
        h('button', { type: 'button', className: cx('ds-mtool', more && 'is-open'), 'aria-label': '지도 도구 더보기', 'aria-haspopup': 'menu', 'aria-expanded': more, onClick: function () { setMore(!more); } }, h(Icon, { name: more ? 'close' : 'more-2' })),
        more ? h('div', { className: 'ds-mlayout__more-menu', role: 'menu' }, p.mobileTools.map(function (t, i) { return h('button', { key: i, type: 'button', role: 'menuitem', className: cx('ds-mlayout__more-item', t.active && 'is-active'), onClick: function () { setMore(false); t.onClick && t.onClick(); } }, h(Icon, { name: t.icon }), h('span', null, t.label)); })) : null) : null,
      mob && p.onLocate ? h('div', { className: cx('ds-mlayout__tools ds-mlayout__tools--locate', panelType && 'has-sheet') }, h('button', { type: 'button', className: 'ds-mtool', 'aria-label': '내 위치', onClick: p.onLocate }, h(Icon, { name: 'focus-3' }))) : null,
      panelType ? h('aside', { className: 'ds-mlayout__panel', 'aria-label': p.listLabel || '목록' },
        mob ? h('button', { type: 'button', className: 'ds-mlayout__grab', 'aria-label': exp ? '목록 줄이기' : '목록 펼치기', onClick: function () { setExp(!exp); } }, h('i')) : null,
        !mob && searchEl ? h('div', { className: 'ds-mlayout__panel-search' }, searchEl) : null,
        h('div', { className: 'ds-mlayout__panel-body' }, typeof p.list === 'function' ? p.list({ openReport: function () { setRep(true); } }) : p.list),
        !mob && !(repOpen && !tab) ? h('button', { type: 'button', className: 'ds-mlayout__toggle', 'aria-label': open ? '목록 접기' : '목록 펼치기', 'aria-expanded': open, onClick: function () { setOpen(!open); } }, h(Icon, { name: open ? 'chevron-left' : 'chevron-right' })) : null) : null,
      report, fpanel);
  }


  /* MapTool — 지도 도구 낱개 버튼(프로필 · 커스텀 · 내 위치). icon · label · onClick */
  function MapTool(p) { return h('button', { type: 'button', className: 'ds-mtool', 'aria-label': p.label, onClick: p.onClick }, h(Icon, { name: p.icon }), p.text ? h('span', null, p.text) : null); }

  window.DS = Object.assign(window.DS || {}, {
    Icon: Icon, Button: Button, IconButton: IconButton, TextButton: TextButton, Input: Input, Select: Select, FormField: FormField,
    Checkbox: Checkbox, Radio: Radio, Switch: Switch, Segment: Segment, SegmentNeutral: SegmentNeutral, SegmentPrimary: SegmentPrimary, SegmentPadded: SegmentPadded, Tabs: Tabs, Pagination: Pagination, PaginationDot: PaginationDot, Breadcrumb: Breadcrumb, PageIndex: PageIndex, ReportNav: ReportNav, TitleBar: TitleBar, MobileNav: MobileNav, NavDrawer: NavDrawer, Avatar: Avatar, UserMenu: UserMenu, Accordion: Accordion, Chip: Chip, SocialBadge: SocialBadge, Profile: Profile, ProfileButton: ProfileButton, Slider: Slider, SliderField: SliderField, MapCluster: MapCluster, MapRectCluster: MapRectCluster, MapBadge: MapBadge, MapMarker: MapMarker, MapCallout: MapCallout, MapTip: MapTip, MapMenu: MapMenu, MapListItem: MapListItem, MapSearch: MapSearch, LocationSelector: LocationSelector, MapLayout: MapLayout, MapTool: MapTool, SideNav: SideNav,
    Card: Card, StatisticCard: StatisticCard, StatisticNumber: StatisticNumber, TextCard: TextCard, StatusBadge: StatusBadge, CategoryBadge: CategoryBadge, ChangeBadge: ChangeBadge,
    InlineAlert: InlineAlert, ExpandedAlert: ExpandedAlert, Toast: Toast, ConfirmModal: ConfirmModal, Modal: Modal, IconModal: IconModal, PopConfirm: PopConfirm, BottomSheet: BottomSheet, ReportModal: ReportModal, Table: Table, MinimalTable: MinimalTable, TableTitle: TableTitle, TableNumber: TableNumber, TableRank: TableRank, TableBar: TableBar, TableActions: TableActions, TableCell: TableCell, TableStatus: TableStatus, TableBadges: TableBadges,
    BarChart: BarChart, LineChart: LineChart, DonutChart: DonutChart, Chart: Chart, ComboChart: ComboChart, HeatmapChart: HeatmapChart, ChartLegend: ChartLegend, chartSeries: SERIES,
    GlobalNav: GlobalNav, PageHeader: PageHeader, SectionHeader: SectionHeader, ContentsHeader: ContentsHeader, SearchField: SearchField, DatePicker: DatePicker, Calendar: Calendar, Tooltip: Tooltip, TooltipBubble: TooltipBubble,
    ToggleButton: ToggleButton, SquareButton: SquareButton, SocialButton: SocialButton, FilterButton: FilterButton, FilterMenu: FilterMenu, FilterDropdown: FilterDropdown,
    SplitButtonGroup: SplitButtonGroup, SquareSplitButtonGroup: SquareSplitButtonGroup, TextButtonGroup: TextButtonGroup, ButtonSet: ButtonSet, MenuButtonSet: MenuButtonSet, RangeCalendar: RangeCalendar, DateRangePicker: DateRangePicker,
    InputLabel: InputLabel, DatePickerInline: DatePickerInline, DateInput: DateInput, PhoneVerification: PhoneVerification, Quantity: Quantity, ControlBox: ControlBox, SelectWithLabel: SelectWithLabel, MenuList: MenuList, Cascader: Cascader, MenuCaption: MenuCaption, Password: Password, TextArea: TextArea, InputQuantity: InputQuantity, InputQuantityGroup: InputQuantityGroup
  });
})();
