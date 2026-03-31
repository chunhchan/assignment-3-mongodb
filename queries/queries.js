// Query 1
db.movies.find(
    { year: 1983, runtime: { $gt: 200 } },
    { _id: 0, runtime: 1, title: 1, year: 1 }
).sort({ runtime: 1 });

// Query 2
db.movies.find(
    { year: { $gt: 2014 }, "imdb.rating": { $gt: 9 } },
    { _id: 0, title: 1, year: 1, "imdb.rating": 1 }
);
