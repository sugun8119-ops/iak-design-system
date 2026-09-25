import type * as React from 'react';

type ForcedState = 'hover' | 'focus';
type MediaTone = 'default' | 'mint' | 'light';

export interface NavLink { label: string; href?: string; current?: boolean }
export interface GlobalHeaderProps { brand?: React.ReactNode; brandHref?: string; links?: NavLink[]; navLabel?: string; className?: string }
export declare function GlobalHeader(props: GlobalHeaderProps): React.ReactElement;

export interface SearchBarProps { disabled?: boolean; label?: string; placeholder?: string; value?: string; defaultValue?: string; buttonLabel?: React.ReactNode; onChange?: (value: string) => void; onSubmit?: (value: string) => void; state?: 'focus'; id?: string; className?: string }
export declare function SearchBar(props: SearchBarProps): React.ReactElement;

export interface HeroSearchProps { imageMissing?: boolean; meta?: React.ReactNode; title: React.ReactNode; text?: React.ReactNode; search?: SearchBarProps; mediaLabel?: string; className?: string }
export declare function HeroSearch(props: HeroSearchProps): React.ReactElement;

export interface CategoryItem { label: React.ReactNode; value: string; href?: string; state?: ForcedState }
export interface CategoryNavProps { items: CategoryItem[]; selected?: string; defaultSelected?: string; onSelect?: (value: string) => void; label?: string; className?: string }
export declare function CategoryNav(props: CategoryNavProps): React.ReactElement;

export interface FilterOption { value: string; label: string }
export interface FilterPanelProps { disabled?: boolean; options: FilterOption[]; value?: string; defaultValue?: string; allValue?: string; onChange?: (value: string) => void; onReset?: () => void; count: number; countLabel?: (count: number) => React.ReactNode; label?: React.ReactNode; resetLabel?: React.ReactNode; id?: string; className?: string }
export declare function FilterPanel(props: FilterPanelProps): React.ReactElement;

export interface ProductCardProps { loading?: boolean; loadingLabel?: string; imageMissing?: boolean; title: React.ReactNode; category?: React.ReactNode; href?: string; media?: MediaTone; mediaLabel?: string; state?: ForcedState; className?: string }
export declare function ProductCard(props: ProductCardProps): React.ReactElement;

export interface ImageCardProps { imageMissing?: boolean; caption?: React.ReactNode; media?: MediaTone; tall?: boolean; mediaLabel?: string; className?: string }
export declare function ImageCard(props: ImageCardProps): React.ReactElement;

export interface ContentGridProps { emptyAction?: React.ReactNode; busy?: boolean; children?: React.ReactNode; empty?: boolean; emptyTitle?: React.ReactNode; emptyText?: React.ReactNode; className?: string }
export declare function ContentGrid(props: ContentGridProps): React.ReactElement;

export interface BrandStatementProps { meta?: React.ReactNode; title: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function BrandStatement(props: BrandStatementProps): React.ReactElement;

export interface CTAProps { variant?: 'primary' | 'secondary'; href?: string; type?: 'button' | 'submit'; onClick?: React.MouseEventHandler; disabled?: boolean; state?: ForcedState; children?: React.ReactNode; className?: string }
export declare function CTA(props: CTAProps): React.ReactElement;

export interface FooterProps { brand?: React.ReactNode; note?: React.ReactNode; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;

/* ---- IAK coverage families (KOREX style) ---- */
export type IconName = 'arrow-up-right' | 'search' | 'check' | 'close' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right' | 'alert' | 'info' | 'minus' | 'plus' | 'image-off' | 'sort' | 'sort-asc' | 'sort-desc' | 'more' | 'refresh' | 'trash' | 'spinner';
type Forced3 = 'hover' | 'focus' | 'pressed';
type FieldState = 'hover' | 'focus';
export interface ButtonProps { /** 'text' is the IAK name; 'ghost' is kept as an alias */ variant?: 'primary' | 'secondary' | 'text' | 'ghost' | 'danger'; autoFocusMark?: boolean; size?: 'sm' | 'md' | 'lg'; state?: Forced3; icon?: IconName; iconEnd?: IconName; iconOnly?: boolean; label?: string; loading?: boolean; loadingLabel?: React.ReactNode; disabled?: boolean; block?: boolean; href?: string; type?: 'button' | 'submit'; onClick?: React.MouseEventHandler; children?: React.ReactNode; className?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
interface FieldBase { name?: string; label: React.ReactNode; description?: React.ReactNode; error?: React.ReactNode; success?: React.ReactNode; required?: boolean; readOnly?: boolean; disabled?: boolean; state?: FieldState; id?: string; className?: string }
export interface TextFieldProps extends FieldBase { value?: string; defaultValue?: string; onChange?: (v: string) => void; placeholder?: string; type?: string; size?: 'sm' | 'md'; autoComplete?: string; inputMode?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface TextareaProps extends FieldBase { value?: string; defaultValue?: string; onChange?: (v: string) => void; placeholder?: string; rows?: number; maxLength?: number }
export declare function Textarea(props: TextareaProps): React.ReactElement;
export interface SelectProps extends FieldBase { options: { value: string; label: string; disabled?: boolean }[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; placeholder?: string }
export declare function Select(props: SelectProps): React.ReactElement;
export interface CheckboxProps { name?: string; value?: string; label: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (v: boolean) => void; indeterminate?: boolean; description?: React.ReactNode; error?: React.ReactNode; required?: boolean; disabled?: boolean; state?: 'focus'; id?: string; className?: string }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface SwitchProps { label: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (v: boolean) => void; description?: React.ReactNode; disabled?: boolean; loading?: boolean; onLabel?: string; offLabel?: string; state?: 'hover' | 'focus'; id?: string; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'error'; size?: 'sm' | 'md'; icon?: IconName | false; children?: React.ReactNode; count?: number; max?: number; countLabel?: (n: number) => string; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface CardProps { title?: React.ReactNode; meta?: React.ReactNode; children?: React.ReactNode; media?: { tone?: 'default' | 'mint' | 'light'; missing?: boolean; tall?: boolean; label?: string } | false; href?: string; footer?: React.ReactNode; variant?: 'outlined' | 'plain'; selected?: boolean; selectedLabel?: string; loading?: boolean; loadingLabel?: string; state?: 'hover' | 'focus'; className?: string }
export declare function Card(props: CardProps): React.ReactElement;
export interface SkeletonProps { variant?: 'text' | 'media' | 'block' | 'circle'; size?: number | 'title' | 'display'; lines?: number; width?: string | number; height?: number; tall?: boolean; label?: string; silent?: boolean; className?: string }
export declare function Skeleton(props: SkeletonProps): React.ReactElement;
export interface IconProps { /** a name outside IconName renders an explicit unresolved marker (no substitute glyph) */ name: IconName | string; size?: 16 | 20 | 24 | number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface DialogProps { open: boolean; onClose?: () => void; title: React.ReactNode; description?: React.ReactNode; size?: 'sm' | 'md' | 'lg'; children?: React.ReactNode; footer?: React.ReactNode; dismissible?: boolean; hideClose?: boolean; closeLabel?: string; contained?: boolean; role?: 'dialog' | 'alertdialog'; initialFocus?: 'panel' | 'close'; closeState?: 'hover' | 'focus'; className?: string }
export declare function Dialog(props: DialogProps): React.ReactElement | null;
export interface AlertDialogProps { open: boolean; title: React.ReactNode; description?: React.ReactNode; tone?: 'danger' | 'neutral'; confirmLabel?: React.ReactNode; cancelLabel?: React.ReactNode; /** return a Promise to get built-in pending → error → retry handling */ onConfirm?: () => void | Promise<unknown>; onResolved?: () => void; errorText?: string; retryLabel?: React.ReactNode; children?: React.ReactNode; onCancel?: () => void; loading?: boolean; loadingLabel?: React.ReactNode; error?: React.ReactNode; contained?: boolean; className?: string }
export declare function AlertDialog(props: AlertDialogProps): React.ReactElement | null;
export interface MenuItem { label?: React.ReactNode; value?: string; /** renders <a role=menuitem> */ href?: string; icon?: IconName; description?: React.ReactNode; selected?: boolean; disabled?: boolean; disabledReason?: string; danger?: boolean; divider?: boolean; state?: 'hover' | 'focus' }
export interface MenuProps { label: React.ReactNode; items: MenuItem[]; onSelect?: (value: string) => void; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; disabled?: boolean; inline?: boolean; triggerVariant?: 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'; className?: string }
export declare function Menu(props: MenuProps): React.ReactElement;
export interface TableColumn { key: string; label: React.ReactNode; sortable?: boolean; state?: 'hover' | 'focus'; align?: 'start' | 'end'; width?: string | number; truncate?: boolean; render?: (value: any, row: any) => React.ReactNode }
export interface TableProps { columns: TableColumn[]; rows: Record<string, any>[]; rowKey?: string; sort?: { key: string; dir: 'asc' | 'desc' }; defaultSort?: { key: string; dir: 'asc' | 'desc' }; onSortChange?: (s: { key: string; dir: 'asc' | 'desc' }) => void; state?: 'loading' | 'empty' | 'error'; loadingRows?: number; emptyTitle?: React.ReactNode; emptyText?: React.ReactNode; emptyAction?: React.ReactNode; errorTitle?: React.ReactNode; errorText?: React.ReactNode; onRetry?: () => void; retryLabel?: string; caption?: string; captionHidden?: boolean; minWidth?: number; selectedKey?: string; rowHeader?: boolean; manualSort?: boolean;
  /** built-in pagination */ pageSize?: number; page?: number; onPageChange?: (page: number) => void;
  /** fixed-height virtual scroll with keyboard (Arrow/PageUp/PageDown/Home/End) and a “show all rows” alternative */ virtual?: { height?: number; rowHeight?: number; overscan?: number };
  className?: string }
export declare function Table(props: TableProps): React.ReactElement;
export interface PaginationProps { total: number; state?: 'hover' | 'focus'; statePage?: number; page?: number; defaultPage?: number; onChange?: (page: number) => void; disabled?: boolean; prevLabel?: string; nextLabel?: string; label?: string; className?: string }
export declare function Pagination(props: PaginationProps): React.ReactElement;
export interface ToastProps { tone?: 'info' | 'success' | 'warning' | 'error'; title?: React.ReactNode; children?: React.ReactNode; description?: React.ReactNode; silent?: boolean; closeState?: 'hover' | 'focus'; action?: React.ReactNode; onClose?: () => void; closeLabel?: string; inline?: boolean; toneLabel?: string; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement;
export interface ToastItem { id: string; tone?: 'info' | 'success' | 'warning' | 'error'; title?: React.ReactNode; description?: React.ReactNode; action?: React.ReactNode }
export interface ToastStackProps { toasts: ToastItem[]; max?: number; onDismiss?: (id: string) => void; inline?: boolean; label?: string; className?: string }
export declare function ToastStack(props: ToastStackProps): React.ReactElement;

declare global {
  interface Window {
    KOREX: {
      GlobalHeader: typeof GlobalHeader; HeroSearch: typeof HeroSearch; SearchBar: typeof SearchBar; CategoryNav: typeof CategoryNav;
      FilterPanel: typeof FilterPanel; ProductCard: typeof ProductCard; ImageCard: typeof ImageCard; ContentGrid: typeof ContentGrid;
      BrandStatement: typeof BrandStatement; CTA: typeof CTA; Footer: typeof Footer;
      Button: typeof Button; TextField: typeof TextField; Textarea: typeof Textarea; Select: typeof Select; Checkbox: typeof Checkbox; Switch: typeof Switch;
      Badge: typeof Badge; Card: typeof Card; Skeleton: typeof Skeleton; Icon: typeof Icon; Dialog: typeof Dialog; Menu: typeof Menu; Table: typeof Table;
      Pagination: typeof Pagination; Toast: typeof Toast; ToastStack: typeof ToastStack; AlertDialog: typeof AlertDialog; ICON_NAMES: IconName[];
    };
  }
}
