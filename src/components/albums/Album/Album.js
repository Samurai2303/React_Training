function Album({album}) {

    return (
        <div>
            <h3>ID - {album.id} <br/> User ID - {album.userId}</h3>
            <p>Title - {album.title}</p>
            <button>Edit album</button>
            <button>Delete album</button>
        </div>
    );
}

export {Album};
