import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

import classNames from "classnames/bind";
import styles from "./Photo.module.scss";

const cx = classNames.bind(styles);

export default function Photo() {
    const { id } = useParams();

    const { loading, data: photo } = useFetch(`photos/${id}`);
    return loading ? (
        <div>loading...</div>
    ) : (
        <div className={cx("wrapper")}>
            <div className={cx("image-wrapper")}>
                <img src={photo.url} alt={photo.title} />
            </div>
            <div className={cx("info-wrapper")}>
                <p>
                    <span className={cx("label")}>Album Id :</span>
                    {photo.albumId}
                </p>
                <p>
                    <span className={cx("label")}>Title: </span>
                    {photo.title}
                </p>
                <p>
                    <span className={cx("label")}>Url: </span>
                    <a href={photo.url}>{photo.url}</a>
                </p>
            </div>
        </div>
    );
}
