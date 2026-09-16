'use client';
import * as React from 'react';
import {iconData} from './icons';
export type IconName = keyof typeof iconData;
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>,'name'> {name:IconName; size?:16|20|24; label?:string}
export function Icon({name,size=20,label,...props}:IconProps){
 const icon=Object.hasOwn(iconData,name)?iconData[name]:undefined;
 if(!icon) return null;
 return <svg {...props} width={size} height={size} viewBox={`0 0 ${icon.width} ${icon.height}`} fill="currentColor" role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true} focusable="false" dangerouslySetInnerHTML={{__html:icon.body}}/>;
}
const cx=(...parts:(string|undefined|false)[])=>parts.filter(Boolean).join(' ');
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:'primary'|'secondary'|'danger'|'text';size?:'sm'|'md'|'lg';loading?:boolean;}
export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(function Button({variant='primary',size='md',loading=false,disabled,children,className,type='button',...props},ref){
 return <button {...props} ref={ref} type={type} disabled={disabled||loading} aria-busy={loading||undefined} className={cx('iak-button',`iak-button--${variant}`,`iak-button--${size}`,className)}><span style={loading?{opacity:0}:undefined}>{children}</span>{loading&&<span className="iak-spinner" aria-hidden="true"/>}</button>;
});
type FieldMeta={label:string;description?:string;error?:string};
function useField(id:string|undefined,description:string|undefined,error:string|undefined,describedBy:string|undefined){const uid=React.useId();const inputId=id||`iak-${uid}`;return {inputId,helpId:`${inputId}-help`,descriptionId:cx(describedBy,(!!error||!!description)&&`${inputId}-help`)||undefined};}
function FieldShell({label,inputId,helpId,description,error,required,children}:{label:string;inputId:string;helpId:string;description?:string;error?:string;required?:boolean;children:React.ReactNode}){return <div className="iak-field"><label htmlFor={inputId}>{label}{required&&<span aria-hidden="true"> *</span>}</label>{children}{(error||description)&&<p id={helpId} className={cx('iak-help',!!error&&'iak-error')}>{error||description}</p>}</div>}
export type TextFieldProps=React.InputHTMLAttributes<HTMLInputElement>&FieldMeta;
export const TextField=React.forwardRef<HTMLInputElement,TextFieldProps>(function TextField({label,description,error,id,className,required,'aria-describedby':describedBy,...props},ref){const f=useField(id,description,error,describedBy);return <FieldShell {...f} label={label} description={description} error={error} required={required}><input {...props} id={f.inputId} ref={ref} required={required} aria-describedby={f.descriptionId} aria-invalid={error?true:props['aria-invalid']} className={cx('iak-input',className)}/></FieldShell>});
export type TextareaProps=React.TextareaHTMLAttributes<HTMLTextAreaElement>&FieldMeta;
export const Textarea=React.forwardRef<HTMLTextAreaElement,TextareaProps>(function Textarea({label,description,error,id,className,required,'aria-describedby':describedBy,rows=4,...props},ref){const f=useField(id,description,error,describedBy);return <FieldShell {...f} label={label} description={description} error={error} required={required}><textarea {...props} rows={rows} id={f.inputId} ref={ref} required={required} aria-describedby={f.descriptionId} aria-invalid={error?true:props['aria-invalid']} className={cx('iak-input','iak-textarea',className)}/></FieldShell>});
export type SelectProps=React.SelectHTMLAttributes<HTMLSelectElement>&FieldMeta;
export const Select=React.forwardRef<HTMLSelectElement,SelectProps>(function Select({label,description,error,id,className,required,'aria-describedby':describedBy,children,...props},ref){const f=useField(id,description,error,describedBy);return <FieldShell {...f} label={label} description={description} error={error} required={required}><select {...props} id={f.inputId} ref={ref} required={required} aria-describedby={f.descriptionId} aria-invalid={error?true:props['aria-invalid']} className={cx('iak-input',className)}>{children}</select></FieldShell>});
export type CheckboxProps=Omit<React.InputHTMLAttributes<HTMLInputElement>,'type'>&{label:string};
export const Checkbox=React.forwardRef<HTMLInputElement,CheckboxProps>(function Checkbox({label,className,...props},ref){return <label className={cx('iak-control',className)}><input {...props} type="checkbox" ref={ref}/><span>{label}</span></label>});
export type SwitchProps=CheckboxProps;
export const Switch=React.forwardRef<HTMLInputElement,SwitchProps>(function Switch({label,className,...props},ref){return <label className={cx('iak-control','iak-switch',className)}><input {...props} type="checkbox" role="switch" ref={ref}/><span className="iak-switch-track" aria-hidden="true"/><span>{label}</span></label>});
export type BadgeProps=React.HTMLAttributes<HTMLSpanElement>&{tone?:'info'|'success'|'warning'|'error'|'neutral'};
export function Badge({tone='neutral',className,children,...props}:BadgeProps){return <span {...props} className={cx('iak-badge',`iak-badge--${tone}`,className)}>{children}</span>}
export type CardProps=Omit<React.HTMLAttributes<HTMLElement>,'title'>&{title?:string;footer?:React.ReactNode};
export function Card({title,footer,children,className,...props}:CardProps){const id=React.useId();return <section {...props} aria-labelledby={title?id:props['aria-labelledby']} className={cx('iak-card',className)}>{title&&<h2 id={id}>{title}</h2>}<div>{children}</div>{footer&&<footer>{footer}</footer>}</section>}
export type SkeletonProps=React.HTMLAttributes<HTMLSpanElement>&{width?:string|number;height?:string|number;circle?:boolean};
export function Skeleton({width='100%',height=20,circle=false,style,className,...props}:SkeletonProps){return <span {...props} aria-hidden="true" className={cx('iak-skeleton',className)} style={{width,height,borderRadius:circle?'50%':undefined,...style}}/>}
