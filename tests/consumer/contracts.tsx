import * as React from 'react';
import {Button,TextField,Textarea,Select,Checkbox,Switch,Badge,Card,Skeleton,Icon,Dialog,Menu,Table,Pagination,ToastProvider,useToast,AlertDialog} from '@iak-design/ui';
// A real consumer compiles this against the packed package and React 18/19 types.
export function Consumer() {
 const input = React.useRef<HTMLInputElement>(null);
 const [open,setOpen] = React.useState(false);
 return <ToastProvider><Card title="Consumer">
  <Button loading={false} onClick={()=>setOpen(true)}>Create</Button>
  <TextField label="Name" ref={input} required error="" />
  <Textarea label="Notes"/><Select label="State"><option>Active</option></Select>
  <Checkbox label="Agree"/><Switch label="Notify"/>
  <Badge tone="success">Saved</Badge><Skeleton/><Icon name="eva:checkmark-fill" label="Saved"/>
  <Dialog title="Edit" trigger={<Button>Edit</Button>} initialFocusRef={input} open={open} onOpenChange={setOpen}><TextField label="Edit name"/></Dialog>
  <Menu trigger={<Button>Actions</Button>} label="Actions" items={[{id:'rename',label:'Rename',onSelect:()=>{}}]}/>
  <Table caption="Projects" rows={[{id:'1',name:'IAK'}]} columns={[{id:'name',header:'Name',cell:row=>row.name,sortValue:row=>row.name}]} rowKey={row=>row.id} pagination={{pageSize:10}}/>
  <Pagination page={1} pageCount={3} onPageChange={()=>{}}/>
 </Card></ToastProvider>;
}
// All public values remain importable; detailed AlertDialog/Toast behavior is tested at runtime.
export const otherPublicValues = [AlertDialog,useToast];
// @ts-expect-error invalid variants must remain rejected
export const invalid = <Button variant="not-an-iak-variant">Invalid</Button>;
// @ts-expect-error fields require an accessible label
export const missingLabel = <TextField/>;
