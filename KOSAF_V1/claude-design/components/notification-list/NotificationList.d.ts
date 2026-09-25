import * as React from 'react';

/**
 * NotificationList — Source-derived (1:85779), 1:92553. 알림 panel: #F5F5F5 backdrop, white r10 list, 15/400 #444 rows at 50px.
 * States: With items · Empty.
 */
export interface NotificationListProps {
  items?: (string | { text: string })[];
  title?: string;
  onClose?: () => void;
  onItem?: (item: any, index: number) => void;
  emptyMessage?: string;
  style?: React.CSSProperties;
}
export declare function NotificationList(props: NotificationListProps): JSX.Element | null;
