import * as React from 'react';

/**
 * FileUpload — Source-derived (1:85779), 1:89966. 심사서류 첨부: 360×45 field with file chips + 99×45 #F8F8F8 찾아보기. Native picker; upload is demo-only.
 * States: Empty · With file · Too large (red) · Error · Disabled.
 */
export interface FileUploadProps {
  files?: { name: string; size?: number; tooLarge?: boolean }[];
  defaultFiles?: { name: string }[];
  onChange?: (files: { name: string; size?: number; tooLarge?: boolean }[]) => void;
  accept?: string;
  multiple?: boolean;
  /** Default 4 (source notice). */
  maxSizeMB?: number;
  buttonLabel?: string;
  placeholder?: string;
  width?: number | string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
export declare function FileUpload(props: FileUploadProps): JSX.Element | null;
