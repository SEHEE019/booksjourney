import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

export default function BookCard(props) {
    const { data } = props;

    return (
        <Grid item>
            <Card style={{
                maxWidth: 345,
                margin: '0 auto',
                background: '#1e1e1e',
                color: '#fff',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '&:hover': {
                    boxShadow: 'none',
                    border: 'none',
                }
            }}>
                <CardActionArea>
					{/* <CardMedia className={classes.media}>
						{data.image_path ? <img className={classes.image} src={`${imageBaseUrl}/image/${treeData.image_path}`} /> : <DefaultImage className={classes.image} />}
					</CardMedia> */}
                    <CardHeader
                        title={data.title}
                        style={{
                            background: '#1e1e1e',
                            color: '#fff',
                            fontStyle: 'semi-bold',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '0.5rem',
                            borderRadius: 0,
                            boxShadow: 'none',
                            border: 'none',
                            '&:hover': {
                                boxShadow: 'none',
                                border: 'none',
                            }
                        }}
                    />
					<CardContent>
						<Typography 
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                lineHeight: '1.5',
                                letterSpacing: '0.05rem',
                                color: '#fff',
                            }} 
                            color="textSecondary"
                        >
							{data.author}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
        </Grid>
    );
}