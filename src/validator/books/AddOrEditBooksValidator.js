export default function addOrEditValidator(
  name,
  readPage,
  pageCount,
  response,
  isEdit
) {
  const customMessage = isEdit ? 'memperbarui' : 'menambahkan';
  const errors = [];

  if (!name) {
    errors.push(`Gagal ${customMessage} buku. Mohon isi nama buku`);
  }

  if (readPage > pageCount) {
    errors.push(
      `Gagal ${customMessage} buku. readPage tidak boleh lebih besar dari pageCount`
    );
  }

  if (errors.length) {
    return response
      .response({
        status: 'fail',
        message: errors.join(' '),
      })
      .code(400);
  }
}
