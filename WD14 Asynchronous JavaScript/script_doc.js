/**
 * API = Application Programming Interface = un set de definitii si protocoale, pentru a putea integra diferite software-uri
 * Sau, in cazul nostru, pentru a putea comunica cu un server folosind ciclul request-response.
 * 
 * JSON = JavaScript Object Notation = un standard de comunicare foarte similar cu JS, prin care putem comunica cu
 * un server.
 * 
 * In JSON, values must be one of the following data types:

a string
a number
an object
an array
a boolean
null

 */

/**
 * HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP
 */


/**
 * URL = Unique Resource Locator = o adresa HTTP care ne duce la o anumita locatie (pe un server)
 * Format: https://simple-books-api.glitch.me/status?ceva=123&altceva=adela
 * 1. Protocolul de comunicare (http/https) = https este securizat; http = hypertext transfer protocol
 * 2. Numele de domeniu (simple-books-api.glitch.me) = reprezinta adresa serverului
 * 3. Ce avem dupa / si pana la ? (in cazul de fata /status) = ruta (path-ul curent) => se numeste endpoint
 * 4. Dupa ? avem query parameters, adica niste chei-valori care se folosesc pentru a trimite extra informatii
 * sau pentru a filtra/ordona/sorta/etc un endpoint
 * Exemplu : https://www.bayut.com/to-rent/2-bedroom-villas/uae/?price_min=20000&price_max=50000&baths_in=3
 * 
 * Un API este o colectie de endpoints, cum ar fi in cazul de mai sus:
 * 1. Endpointul de status: https://simple-books-api.glitch.me/status
 * 2. Endpointul de books: https://simple-books-api.glitch.me/books
 */


/**
 * Request Methods
 * 1. GET = ia ceva de la server => exemplu: ia lista de carti
 * 2. POST = trimite niste date noi catre server => exemplu: adauga o carte noua in sistem
 * 3. PUT/PATCH = trimite niste date catre o resursa existenta in sistem (update) => exemplu : schimbarea titlului unei carti
 * 4. DELETE = sterge o resursa din sistem = > exemplu: stergem o carte
 * 
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */

/**
 * Status codes = statusul unui request
 * 1xx (100, 101, etc...) = statusuri de informare
 * 2xx = statusuri de succes; Cel mai des intalnit este 200 OK
 * 3xx = statusuri de redirectionare
 * 4xx = statusuri de eroare de client (browser); cel mai faimos este 404 NOT FOUND
 * 5xx = statusuri de eroare de server; 503 SERVICE UNAVAILABLE sau 502 BAD GATEWAY
 * 
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */