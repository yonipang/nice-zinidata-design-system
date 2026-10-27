// NICE지니데이타 디자인시스템 — window.DS (문서용 타입, 검사하지 않음)
type Size5 = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type IconName = 'add' | 'add-box' | 'add-circle' | 'check' | 'chevron-down' | 'chevron-right' | 'circle' | 'close' | 'delete-bin' | 'edit' | 'expand-up-down' | 'eye' | 'function' | 'loader' | 'loader-2' | 'loader-4' | 'more-2' | 'pencil' | 'question' | 'settings-3' | 'settings-4' | 'square' | 'subtract' | 'user';

export interface IconProps { name: IconName; size?: number; spin?: boolean; label?: string; }
export interface ButtonProps { color?: 'primary' | 'neutral' | 'negative' | 'inverse'; variant?: 'solid' | 'soft' | 'outline' | 'base' | 'ghost'; size?: Size5; iconLeft?: IconName; iconRight?: IconName; icon?: IconName; label?: string; loading?: boolean; disabled?: boolean; fullWidth?: boolean; state?: 'hover' | 'pressed' | 'focus' | 'disabled'; onClick?: () => void; children?: React.ReactNode; }
export interface IconButtonProps { icon: IconName; label: string; color?: 'neutral' | 'neutral-subtle' | 'primary' | 'negative' | 'inverse'; size?: '3xs' | '2xs' | 'xs' | Size5; loading?: boolean; state?: 'hover' | 'pressed' | 'focus' | 'disabled'; onClick?: () => void; }
export interface TextButtonProps { color?: 'neutral' | 'neutral-subtle' | 'primary' | 'inverse'; size?: 'xs' | 'sm'; underline?: boolean; iconRight?: IconName; children?: React.ReactNode; }
export interface InputProps { variant?: 'line' | 'soft' | 'inverse'; size?: 'md' | 'xl' | '2xl'; negative?: boolean; state?: 'default' | 'hover' | 'focus' | 'read-only' | 'disabled'; iconLeft?: IconName; iconRight?: IconName; suffix?: string; value?: string; placeholder?: string; onChange?: (e: any) => void; }
export interface SelectProps { options: Array<string | { value: string; label: string; disabled?: boolean }>; value?: string; placeholder?: string; variant?: 'line' | 'soft' | 'ghost'; size?: 'md' | 'xl' | '2xl'; negative?: boolean; state?: 'default' | 'hover' | 'focus' | 'disabled'; open?: boolean; onToggle?: () => void; onChange?: (v: string) => void; width?: number | string; }
export interface FormFieldProps { label?: string; required?: boolean; optional?: boolean; helper?: string; error?: string; htmlFor?: string; children: React.ReactNode; }
export interface CheckboxProps { checked?: boolean; onChange?: (next: boolean) => void; label?: string; description?: string; size?: 'sm' | 'xs'; negative?: boolean; disabled?: boolean; indeterminate?: boolean; state?: 'hover'; }
export type RadioProps = Omit<CheckboxProps, 'indeterminate'>;
export interface SwitchProps { checked?: boolean; onChange?: (next: boolean) => void; label?: string; variant?: 'primary' | 'green'; size?: 'md' | 'sm' | 'xs' | '2xs'; disabled?: boolean; state?: 'hover'; }
type Item = string | { value: string; label: string; icon?: IconName };
export interface SegmentProps { items: Item[]; value?: string; onChange?: (v: string) => void; color?: 'neutral' | 'primary'; size?: 'sm' | 'md' | 'lg'; fill?: boolean; }
export interface TabsProps { items: Item[]; value?: string; onChange?: (v: string) => void; variant?: 'underline' | 'ghost'; color?: 'dark' | 'primary'; }
export interface PaginationProps { page: number; total: number; max?: 5 | 10; onChange?: (page: number) => void; }
export interface SideNavProps { items: Array<{ value: string; label: string; icon?: IconName; depth?: 1 | 2 }>; value?: string; onChange?: (v: string) => void; color?: 'basic' | 'brand'; background?: 'light' | 'dark'; }
export interface CardProps { size?: 'lg' | 'sm' | 'xl'; title?: string; description?: string; action?: React.ReactNode; variant?: 'card' | 'ghost'; children?: React.ReactNode; }
export interface StatisticCardProps { title: string; value: string; unit?: string; change?: string; changeType?: 'increase' | 'decrease' | 'neutral'; description?: string; size?: 'lg' | 'sm'; variant?: 'card' | 'ghost'; }
export interface StatusBadgeProps { color?: 'neutral' | 'positive' | 'accent' | 'warning' | 'negative'; variant?: 'soft' | 'solid'; size?: 'xs' | 'sm'; shape?: 'rounded' | 'pill'; dot?: boolean; border?: boolean; children: React.ReactNode; }
export interface CategoryBadgeProps { color?: 'rose' | 'pink' | 'fuchsia' | 'purple' | 'violet' | 'indigo' | 'blue' | 'sky' | 'cyan' | 'teal' | 'emerald' | 'green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'red' | 'gray' | 'white'; size?: 'xs' | 'sm'; shape?: 'rounded' | 'pill'; border?: boolean; children: React.ReactNode; }
export interface ChangeBadgeProps { type?: 'increase' | 'decrease' | 'neutral'; size?: 'md' | 'sm'; background?: boolean; children: React.ReactNode; }
export interface InlineAlertProps { type?: 'basic' | 'information' | 'warning' | 'negative' | 'positive'; variant?: 'soft' | 'line'; title?: string; action?: React.ReactNode; onClose?: () => void; children?: React.ReactNode; }
export interface ToastProps { type?: 'dark' | 'basic' | 'information' | 'warning' | 'negative' | 'positive'; action?: React.ReactNode; onClose?: () => void; children: React.ReactNode; }
export interface ConfirmModalProps { type?: 'basic' | 'negative'; title: string; confirmLabel?: string; cancelLabel?: string; onConfirm?: () => void; onCancel?: () => void; onClose?: () => void; buttonWidth?: 'fit' | 'fill'; secondaryVariant?: 'soft' | 'outline'; inline?: boolean; children?: React.ReactNode; }
export interface TableColumn { key: string; label: string; align?: 'left' | 'center' | 'right'; numeric?: boolean; legendColor?: string; width?: number | string; hideHeader?: boolean; render?: (value: any, row: any) => React.ReactNode; }
export interface TableProps { columns: TableColumn[]; rows: Array<Record<string, any> & { _selected?: true | 'primary' | 'negative' }>; header?: 'main' | 'subtle'; striped?: boolean; groups?: Array<{ label: string; span?: number; rowSpan?: number }>; caption?: string; }
export interface MinimalTableProps { columns: Array<{ key: string; label: string; numeric?: boolean; legendColor?: string; deltaKey?: string; render?: (v: any, r: any) => React.ReactNode }>; rows: Array<Record<string, any>>; }
type Series = { name: string; data: number[]; color?: string };
export interface BarChartProps { categories: string[]; series: Series[]; height?: number; width?: number; legend?: boolean; label?: string; }
export type LineChartProps = BarChartProps;
export interface DonutChartProps { items: Array<{ name: string; value: number; color?: string }>; size?: number; centerValue?: string; centerLabel?: string; label?: string; }
export interface ChartLegendProps { series: Array<{ name: string; color?: string }>; }

export interface GlobalNavProps { items: Array<{ value?: string; label: string; hasMenu?: boolean; state?: 'hover' }>; value?: string; onChange?: (v: string) => void; logo?: React.ReactNode; right?: React.ReactNode; tabStyle?: 'ghost' | 'underline'; align?: 'left' | 'center'; width?: 'fill' | 'default' | 'wide'; }
export interface PageHeaderProps { title: string; titleSize?: 'xl' | '2xl' | '3xl'; description?: string; smallTitle?: string; breadcrumb?: string[]; tooltip?: string; actions?: React.ReactNode; divider?: boolean; background?: 'light' | 'dark'; children?: React.ReactNode; }
export interface SearchFieldProps { value?: string; placeholder?: string; onChange?: (e: any) => void; onClear?: () => void; onSearch?: (q: string) => void; variant?: 'line' | 'soft' | 'inverse'; size?: 'md' | 'lg' | 'xl' | '2xl'; state?: 'hover' | 'focus' | 'disabled'; button?: boolean | string; width?: number | string; }
export interface CalendarProps { value?: Date; month?: Date; today?: Date; range?: [Date?, Date?]; onChange?: (d: Date) => void; onMonth?: (m: Date) => void; }
export interface DatePickerProps extends CalendarProps { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; placeholder?: string; suffix?: string; state?: 'hover' | 'focus' | 'disabled'; open?: boolean; onToggle?: () => void; }
export interface TooltipProps { content: React.ReactNode; title?: string; position?: 'top' | 'bottom' | 'left' | 'right'; open?: boolean; label?: string; children?: React.ReactNode; }
