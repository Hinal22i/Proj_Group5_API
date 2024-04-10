import { Box, Typography } from '@mui/material';

const MainContent = () => {
    
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '6rem',
            gap: '6rem'
        }}>

            <Box component="img" src='https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?rs=1&pid=ImgDetMain' alt="Description" sx={{ maxWidth: '50%', marginRight: 2 }} />

            <Typography variant="body1" >
                <Typography>50.000 Books</Typography>
                <Typography>20+ Categories</Typography> <br />
                <Typography>&quot;Embark on a transformative journey with our curated collection of books. Explore life&apos;s mysteries, conquer challenges, and uncover the secrets to living life to the fullest. With diverse genres and compelling narratives, each page offers inspiration, wisdom, and the keys to unlocking your true potential. Dive into our library and embark on a voyage of self-discovery and personal growth. Your next adventure awaits!&quot;</Typography>
            </Typography>
        </Box>
    );
};

export default MainContent;





// Welcome to our vast literary universe! With over <b>50,000</b> captivating books spread across <b>20+</b> diverse categories, our library promises endless exploration. From timeless classics to contemporary gems, immerse yourself in stories that transcend time and genre. Discover new worlds, unlock hidden treasures, and embark on unforgettable journeys of imagination and knowledge. Start your adventure today and let the pages ignite your curiosity and passion for reading.