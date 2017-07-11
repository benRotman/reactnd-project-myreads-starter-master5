This is acomplete project for part 1 of udacity react nano degree

Please check your books.api functionality on the server since it returns
different results from the search query and the getAll query,
meaning, a certain unique book will have a different 'shelf' field
when received on a responde from getAll query compared with response
received from search. It also seems like once you update a book(for
most books) it is only updated for the response of getAll and not for search.
More over, for some queries in the search method you receive errors,
I have error handled that but it seems weird it should error out
in the first place.
Other than that, the app has all functions has requested and is
published on git, just clone, npm install and then npm start to
run