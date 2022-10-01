function Album({album}) {

  return (
      <div>
          <h3>User Id - {album.userId} <br/> Id - {album.id}</h3>
          <p>Title - {album.title}</p>
      </div>
  );
}

export {Album};
