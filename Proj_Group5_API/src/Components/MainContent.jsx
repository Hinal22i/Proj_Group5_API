import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

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

    return (
        <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '6rem',
            gap: '6rem'
        }}>

            <Box component="img" src={`${data && data.includes.Asset.map((entry) => (entry.fields.file.url))}`} alt="Description" sx={{ maxWidth: '50%', marginRight: 2 }} />

            <Typography variant="body1" sx= {{ fontSize: '1rem'}}>
                <Typography>
                    {data && data.items.map((entry) => (entry.fields.BookCount))} Books</Typography>
                <Typography>{data && data.items.map((entry) => (entry.fields.categoryCount))}+ Categories </Typography> <br />
                <Typography>{data && data.items.map((entry) => (entry.fields.description))} </Typography>
            </Typography>
        </Box>
        <button className='button'>Let&apos;s Go to Book Store</button>
        </>
    );
};

export default MainContent;
