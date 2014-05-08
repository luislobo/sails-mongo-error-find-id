I happen to have attribute values in a document that looks like a mongodb object id, but it's not. I defined it as a string.
Whenever I try to find it, it is not found, as it is converted by find into an ObjectId (as far as I've seen, in lib/query/index.js, function ParseTypes.
So, how can I query my STRING attribute (notice, its not a model attribute), that has a similar format to a MongoDB id?
I think the ParseTypes should be more intelligent, like checking the schema, if the attribute type is model... or something like that.

if you lift and run 

http://localhost:1337/document/working

you will see in the console a document created and a document found

http://localhost:1337/document/notworking

you will see in the console a document created and a document NOT found
