import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const MainContent = () => {
    const [data, setData] = useState();

    const url = 'https://cdn.contentful.com/spaces/tckbs3t41kd5/environments/master/entries?access_token=5YKbClc0mVuVulCYhjocUmsVQzg2av5fApTUsYtbw7I&content_type=landingPage';

    useEffect(() => {
        const fetchData = () => {
            fetch(url)
                .then((response) => response.json())
                .then((result) => setData(result))
                .catch((error) => console.error(error));
        }
        fetchData();
    }, []);

    // const toBookShelf = () => {
    //     <BookShelf />
    // }

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '6rem',
                gap: '6rem',
                '@media (max-width: 1050px)': {
                    display: 'flex',
                    flexDirection: 'column' // Increase the width to 80% for smaller screens
                  },
            }}>

                <Box component="img" src={`${data && data.includes.Asset.map((entry) => (entry.fields.file.url))}`} alt="Description"
                    sx={{
                        maxWidth: '50%',
                        borderRadius: '2rem',
                        marginRight: 2,
                        '@media (max-width: 768px)': {
                            width: '80%', // Increase the width to 80% for smaller screens
                          },
                          '@media (max-width: 480px)': {
                            width: '100%', // Set the width to 100% for even smaller screens
                          },
                    }} />

                <Typography variant="body1">
                    <Typography fontWeight="bold" fontSize="2rem">
                        {data && data.items.map((entry) => (entry.fields.BookCount))} Books</Typography>
                    <Typography fontWeight="bold" fontSize="2rem">{data && data.items.map((entry) => (entry.fields.categoryCount))}+ Categories </Typography> <br />
                    <Typography fontWeight="semibold" fontSize="1.5rem">{data && data.items.map((entry) => (entry.fields.description))} </Typography>
                </Typography>
            </Box>
            <button className='button'><a href='/BookShelf'>Plunge into pages &nbsp;&nbsp; </a><FaArrowRight /></button>
        </>
    );
};

export default MainContent;
