Debouncing :

typing slow = 200ms
typing fast = 30ms

Performance : 
- iphone pro max = 14 letter = 14 indivdual api call will be making server slow but with the help of debouncing we can reduce the api call .
- with debouncing 3 api calls whenever we type the 14 letter


Debouncing with 200ms 
-if difference between 2 key storkes is < 200ms - Declicne api call,
- more than 200 ms make an api call