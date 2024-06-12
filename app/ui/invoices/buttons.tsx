import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice } from '@/app/lib/actions';
import Link from 'next/link';
// trong file nay co nhieu button lien quan toi invoices nene chung ta dat ten laf button => ca nhanh toi thay viec dat ten nay hoi ngu, vi ten file kha truu tuong, va khong hieu chuc nang chinh cua fil nay la gi
export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
// ở đây việc delete invoice mà không có nút xác nhận là 1 rủi ro khó là lớn khi người dùng bấm nhầm nút delete, và không thể cover lại dữ liệu đã mất
export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
