import React from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";

import classNames from "classnames/bind";
import styles from "./Album.module.scss";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Album() {
    const { id } = useParams();

    const { loading: albumLoading, data: listAlbum } = useFetch("albums");
    const { loading: photoLoading, data: listPhoto } = useFetch(
        `photos?albumId=${id}`
    );
    return albumLoading ? (
        <div>Loading...</div>
    ) : (
        <div className={cx("wrapper")}>
            <div className={cx("albums-wrapper")}>
                {listAlbum?.map((album) => (
                    <Link
                        className={cx("album-item")}
                        key={album.id}
                        to={`/album/${album.id}`}
                    >
                        {album.title}
                    </Link>
                ))}
            </div>
            <div className={cx("photo-wrapper")}>
                {photoLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Grid container spacing={2}>
                        {listPhoto?.map((photo) => (
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 150 }}
                                        image={photo.thumbnailUrl}
                                        title={photo.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {photo.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/photo/${photo.id}`}>
                                            <Button>Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </div>
        </div>
    );
}
