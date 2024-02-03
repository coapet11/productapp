import { useEffect } from 'react'
import ProductService from '../services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { productHandler } from '../store/productSlice';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function PostPage() {
    const { isLoading, allProducts } = useSelector((state) => state.productStore);
    const dispatch = useDispatch();

    useEffect(() => {
        ProductService.getAllProducts()
            .then(res => {
                dispatch(productHandler(res.data.products));
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div className='flex flex-wrap container mx-auto items-center justify-center gap-5 mt-[50px]'>
            {isLoading ? (

                allProducts.map((el, index) => {
                    return (
                        <Card sx={{ width: 345, height: 350 }} key={index}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={el.thumbnail}
                                title='Product'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {el.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {el.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href={`/posts/${el.id}`}>Details</Link>
                            </CardActions>
                        </Card>
                    )
                })

            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default PostPage