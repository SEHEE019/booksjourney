import React from 'react';
import { Box, Grid } from '@mui/material';
import bookData from '../../books.json';
import BookCard from './BookCard';

export default function BookListView(props) {
    const [books, setBooks] = React.useState([]);

    console.log(bookData);

    const getData = () => {
        setBooks(bookData);
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <Box style={{
            left: 0,
            top: 0,
            width: '100%',
            height: '90vh',
            overflowX: 'hidden',
            background: '#1e1e1e',
        }}>
            <Grid container spacing={5}>
                {Object.values(bookData).map((book, index) => {
                    return (
                        <BookCard
                            key={book.isbn}
                            data={book}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
} 