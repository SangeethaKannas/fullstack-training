## Evolution of Web

### Web 1
- Email Marketing
- Nascent SEO
- TV and Radio
- Print Ads

### Web 2
- Social Media
- Data Driven
- D2C
- Targeting

### Web 3
- NFTs
- Decentralization
- AI
- Tokenized

A REST operation is defined by an HTTP method and a request URI. Its structure is:

    /rest/<path>?<query>#<fragment>

       ^     ^        ^         ^
       |     |        |         |
     entry  resource  query    fragment

      M       O        O         I

(M=mandatory, O=optional, I=ignored)

In REST, HTTP methods map to CRUDX operations. The methods are:
?	GET: used to retrieve data for a resource
?	POST: used for creating a configuration data resource
?	·      PUT: used to replace a resource
?	·      DELETE: used to delete a resource. The resource must exist or the DELETE operation will fail.
?	OPTIONS: used to discover methods supported for a resource
?	HEAD: used to retrieve just the headers (i.e., excluding the body) of the corresponding GET operation.
