import { runQuery } from './db.js';

export const getAllBooks = async (req, res) => {
  const rows = await runQuery('SELECT * FROM books');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(rows));
};

export const getBookDetails = async (req, res, id) => {
  const rows = await runQuery('SELECT * FROM books WHERE id = ?', [id]);
  if (rows.length) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(rows[0]));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Book not found');
  }
};

export const addBook = (req, res) => {
  let new_book_data = '';
  req.on('data', chunk => {
    new_book_data += chunk.toString();
  });

  req.on('end', async () => {
    const { title, author } = JSON.parse(new_book_data);
    const result = await runQuery(
      'INSERT INTO books (title, author) VALUES (?, ?)',
      [title, author]
    );

    const newBook = { id: result.insertId, title, author };
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newBook));
  });
};

export const updateBookDetails = (req, res, id) => {
  let updated_data = '';
  req.on('data', chunk => {
    updated_data += chunk.toString();
  });

  req.on('end', async () => {
    const { title, author } = JSON.parse(updated_data);
    const result = await runQuery(
      'UPDATE books SET title = ?, author = ? WHERE id = ?',
      [title, author, id]
    );

    if (result.affectedRows) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Book with id ${id} updated successfully`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Book with id ${id} not found`);
    }
  });
};

export const deleteBook = async (req, res, id) => {
  const result = await runQuery('DELETE FROM books WHERE id = ?', [id]);
  if (result.affectedRows) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Book with id ${id} deleted successfully`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Book not found');
  }
};
