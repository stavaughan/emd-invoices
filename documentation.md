# Documentation for Invoice Forms

Some guidelines and notes to help people get the most out of this app by understanding the rationale behind the current input structure

> ***For example:***
> If you have - or anticipate having - multiple businesses; you can select an identifier, that will be compiled with each invoice for a particular business to make it easier to keep track of which invoices apply to which businesses. When you are entering data for a new business, you will come accross a 'business prefix' field where you can enter a prefix for that business. The same applies, when entering data for a new customer as well.
>
> In the case where you have both a business prefix and a customer prefix, they will be separated by a numerical '0', to make it easier for the program to filter through your invoices for you. Each prefix you add will be held as an item in special collection within the database. The program will prompt you if you attempt to enter a prefix that has already been taken. For this reason, you can alot up to 3 alpha characters for each prefix. If you need more than that, you've outgrown this app a long time ago.
>
> By adding a 1 to 3 letter alpha uppercase prefix before the daily count component of the Invoice number.
> Most people have more than one customer. However, if your customers that provide you repeat business, you can add another prefix
> identifier for those customers as well.
>
> Here is an example of an invoice number where a single uppercase letter identifies the customer:
>
> ```cl
> 221025V012
> - this breaks down as follows:
> YY(year) + MM(month) + DD(day) + ['V' -> customer prefix] + [0 -> spacer] + [customer invoice count for that day (12)]
> *note: the program won't allow duplicates as it runs through the previous numbers before outputting a new one
> ```
