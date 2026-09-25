import type * as React from 'react';

/** Preview-only forced state; real pages get these from :hover / :focus-visible. */
export type DewState = 'default' | 'hover' | 'focus';
/** Self-made media placeholder tones: default = border ground, mint = support, light = surface. */
export type MediaTone = 'default' | 'mint' | 'light';
export interface MediaProps { /** derived-extension: missing-image state */ missing?: boolean; missingLabel?: string; tone?: MediaTone; ratio?: 'landscape' | 'portrait' | 'wide'; label?: string; src?: string; alt?: string; caption?: React.ReactNode; credit?: React.ReactNode }

export interface EditorialCTAProps { label?: React.ReactNode; children?: React.ReactNode; href?: string; direction?: 'forward' | 'back'; arrow?: string; as?: 'a' | 'span'; state?: DewState; onClick?: React.MouseEventHandler; className?: string }
export declare function EditorialCTA(props: EditorialCTAProps): React.ReactElement;

export interface EditorialHeaderProps { brand?: React.ReactNode; brandHref?: string; navLabel?: string; links?: Array<{ label: React.ReactNode; href?: string; current?: boolean; state?: DewState }>; className?: string }
export declare function EditorialHeader(props: EditorialHeaderProps): React.ReactElement;

export interface CategoryNavProps { label?: string; items: Array<{ label: React.ReactNode; href?: string; value?: string; selected?: boolean; state?: DewState }>; onSelect?: (value: string, index: number) => void; className?: string }
export declare function CategoryNav(props: CategoryNavProps): React.ReactElement;

export interface FeatureStoryProps { eyebrow?: React.ReactNode; title: React.ReactNode; description?: React.ReactNode; cta?: EditorialCTAProps; media?: MediaProps; as?: 'h1' | 'h2'; className?: string }
export declare function FeatureStory(props: FeatureStoryProps): React.ReactElement;

export interface StoryCardProps { href?: string; media?: MediaProps; meta?: React.ReactNode; title: React.ReactNode; ctaLabel?: React.ReactNode | null; as?: 'h2' | 'h3' | 'h4'; state?: DewState; className?: string }
export declare function StoryCard(props: StoryCardProps): React.ReactElement;

export interface MediaCardProps { missing?: boolean; missingLabel?: string; orientation?: 'landscape' | 'portrait'; tone?: MediaTone; label?: string; src?: string; alt?: string; caption?: React.ReactNode; credit?: React.ReactNode; className?: string }
export declare function MediaCard(props: MediaCardProps): React.ReactElement;

export interface EditorialGridProps { variant?: 'feature' | 'three'; items: StoryCardProps[]; eyebrow?: React.ReactNode; title?: React.ReactNode; headingAs?: 'h2' | 'h3'; cta?: EditorialCTAProps; id?: string; className?: string }
export declare function EditorialGrid(props: EditorialGridProps): React.ReactElement;

export interface QuoteBlockProps { quote?: React.ReactNode; children?: React.ReactNode; cite?: React.ReactNode; className?: string }
export declare function QuoteBlock(props: QuoteBlockProps): React.ReactElement;

export interface ImageCaptionProps { caption?: React.ReactNode; children?: React.ReactNode; credit?: React.ReactNode; as?: 'figcaption' | 'p' | 'div'; className?: string }
export declare function ImageCaption(props: ImageCaptionProps): React.ReactElement;

export interface ArticleMetaProps { items: React.ReactNode[]; label?: string; className?: string }
export declare function ArticleMeta(props: ArticleMetaProps): React.ReactElement;

export interface FooterProps { brand?: React.ReactNode; note?: React.ReactNode; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;

// ---- Common families (IAK coverage list; DEW visual authority) — derived-extension ----
export type ForcedState = 'hover' | 'focus' | 'pressed';
export type IconName = 'arrow-up-right' | 'arrow-right' | 'arrow-left' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right' | 'check' | 'close' | 'plus' | 'minus' | 'search' | 'more' | 'info' | 'success' | 'alert' | 'error' | 'sort' | 'sort-asc' | 'sort-desc' | 'image' | 'image-off' | 'trash' | 'bookmark' | 'download' | 'refresh' | 'loader';
export interface IconProps { name: IconName; size?: 16 | 20 | 24; tone?: 'accent' | 'muted'; label?: string; spin?: boolean; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface ButtonProps { variant?: 'primary' | 'secondary' | 'danger' | 'text'; size?: 'sm' | 'md' | 'lg'; icon?: IconName; iconPosition?: 'start' | 'end'; iconOnly?: boolean; label?: React.ReactNode; children?: React.ReactNode; loading?: boolean; loadingLabel?: React.ReactNode; disabled?: boolean; fullWidth?: boolean; pressed?: boolean; 'aria-describedby'?: string; type?: 'button' | 'submit' | 'reset'; state?: ForcedState; onClick?: React.MouseEventHandler; 'aria-label'?: string; className?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
interface FieldBase { label: React.ReactNode; description?: React.ReactNode; error?: React.ReactNode; required?: boolean; optional?: boolean; disabled?: boolean; readOnly?: boolean; id?: string; name?: string; state?: 'hover' | 'focus'; className?: string }
export interface TextFieldProps extends FieldBase { type?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: React.ChangeEventHandler<HTMLInputElement>; icon?: IconName; inputMode?: string; autoComplete?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface TextareaProps extends FieldBase { rows?: number; maxLength?: number; placeholder?: string; value?: string; defaultValue?: string; onChange?: React.ChangeEventHandler<HTMLTextAreaElement> }
export declare function Textarea(props: TextareaProps): React.ReactElement;
export interface SelectProps extends FieldBase { options: Array<{ value: string; label: React.ReactNode; disabled?: boolean }>; placeholder?: string; value?: string; defaultValue?: string; onChange?: React.ChangeEventHandler<HTMLSelectElement> }
export declare function Select(props: SelectProps): React.ReactElement;
export interface CheckboxProps { label: React.ReactNode; description?: React.ReactNode; checked?: boolean; defaultChecked?: boolean; indeterminate?: boolean; onChange?: React.ChangeEventHandler<HTMLInputElement>; required?: boolean; error?: React.ReactNode; disabled?: boolean; name?: string; value?: string; id?: string; state?: 'hover' | 'focus'; className?: string }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface SwitchProps { label: React.ReactNode; description?: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (checked: boolean) => void; disabled?: boolean; onLabel?: string; offLabel?: string; id?: string; state?: 'focus'; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger'; icon?: IconName | null; label?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface CardProps { title?: React.ReactNode; eyebrow?: React.ReactNode; description?: React.ReactNode; media?: MediaProps; badges?: React.ReactNode; footer?: React.ReactNode; children?: React.ReactNode; href?: string; variant?: 'plain' | 'outlined' | 'support'; orientation?: 'vertical' | 'horizontal'; selected?: boolean; disabled?: boolean; as?: 'h2' | 'h3' | 'h4'; state?: 'hover' | 'focus'; className?: string }
export declare function Card(props: CardProps): React.ReactElement;
export interface SkeletonProps { variant?: 'text' | 'heading' | 'media' | 'story' | 'feature' | 'row' | 'block'; lines?: number; cells?: number; ratio?: 'portrait' | 'wide'; width?: string | number; height?: string | number; label?: string; decorative?: boolean; className?: string }
export declare function Skeleton(props: SkeletonProps): React.ReactElement;
export interface DialogProps { open: boolean; onClose?: () => void; title: React.ReactNode; eyebrow?: React.ReactNode; description?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode; size?: 'sm' | 'md' | 'lg'; icon?: IconName; tone?: 'danger'; dismissable?: boolean; closable?: boolean; role?: 'dialog' | 'alertdialog'; inline?: boolean; className?: string }
export declare function Dialog(props: DialogProps): React.ReactElement | null;
export interface AlertDialogProps { open: boolean; title: React.ReactNode; description?: React.ReactNode; confirmLabel?: React.ReactNode; cancelLabel?: React.ReactNode; onConfirm?: () => void; onCancel?: () => void; tone?: 'danger' | 'default'; loading?: boolean; loadingLabel?: React.ReactNode; /** derived-extension: failure message; switches confirm to a retry button */ error?: React.ReactNode; errorTitle?: React.ReactNode; retryLabel?: React.ReactNode; onRetry?: () => void; eyebrow?: React.ReactNode; children?: React.ReactNode; inline?: boolean }
export declare function AlertDialog(props: AlertDialogProps): React.ReactElement | null;
export interface MenuItem { label?: React.ReactNode; description?: React.ReactNode; icon?: IconName; selected?: boolean; disabled?: boolean; disabledReason?: React.ReactNode; danger?: boolean; separator?: boolean; onSelect?: (item: MenuItem) => void; state?: 'hover' | 'focus' }
export interface MenuProps { label: React.ReactNode; items: MenuItem[]; onSelect?: (item: MenuItem) => void; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; triggerVariant?: ButtonProps['variant']; size?: ButtonProps['size']; align?: 'start' | 'end'; menuLabel?: string; inline?: boolean; className?: string }
export declare function Menu(props: MenuProps): React.ReactElement;
export interface TableColumn { key: string; label: React.ReactNode; sortable?: boolean; align?: 'start' | 'end'; width?: string | number; render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode }
export interface TableProps { columns: TableColumn[]; rows?: Array<Record<string, unknown> & { id?: string | number; selected?: boolean }>; sort?: { key: string; direction: 'asc' | 'desc' }; onSort?: (key: string, direction: 'asc' | 'desc') => void; state?: 'ready' | 'loading' | 'empty' | 'error'; caption?: React.ReactNode; summary?: React.ReactNode; emptyTitle?: React.ReactNode; emptyMessage?: React.ReactNode; emptyAction?: React.ReactNode; errorTitle?: React.ReactNode; errorMessage?: React.ReactNode; onRetry?: () => void; minWidth?: number; scrollHint?: boolean; className?: string }
export declare function Table(props: TableProps): React.ReactElement;
export interface PaginationProps { page: number; total: number; onChange?: (page: number) => void; hrefFor?: (page: number) => string; siblingCount?: number; disabled?: boolean; label?: string; className?: string }
export declare function Pagination(props: PaginationProps): React.ReactElement;
export interface ToastProps { tone?: 'info' | 'success' | 'warning' | 'error'; title: React.ReactNode; message?: React.ReactNode; action?: { label: React.ReactNode; onClick?: () => void }; onClose?: () => void; toneLabel?: string; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement;
export declare function ToastRegion(props: { children?: React.ReactNode; inline?: boolean; className?: string }): React.ReactElement;

declare global { interface Window { DEW: { EditorialHeader: typeof EditorialHeader; CategoryNav: typeof CategoryNav; FeatureStory: typeof FeatureStory; StoryCard: typeof StoryCard; MediaCard: typeof MediaCard; EditorialGrid: typeof EditorialGrid; QuoteBlock: typeof QuoteBlock; ImageCaption: typeof ImageCaption; ArticleMeta: typeof ArticleMeta; EditorialCTA: typeof EditorialCTA; Footer: typeof Footer; Icon: typeof Icon; Button: typeof Button; TextField: typeof TextField; Textarea: typeof Textarea; Select: typeof Select; Checkbox: typeof Checkbox; Switch: typeof Switch; Badge: typeof Badge; Card: typeof Card; Skeleton: typeof Skeleton; Dialog: typeof Dialog; AlertDialog: typeof AlertDialog; Menu: typeof Menu; Table: typeof Table; Pagination: typeof Pagination; Toast: typeof Toast; ToastRegion: typeof ToastRegion } } }
