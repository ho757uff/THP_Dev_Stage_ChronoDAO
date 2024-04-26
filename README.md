# THP_Dev_Stage_ChronoDAO

This Repository is dedicated to develop tools for users of the OpenLoot website and market-place.
At the moment we're aiming to develop :
 - a standalone Extension which will serve as an asset/value tracker for users on openloot.com
 - a set of tools to implement in the website of the ChronoDAO, in order to further answer the need of reliable online aids when it comes to Web3 Gaming



## OpenLoot API endpoints

api.openloot.com/v2

------

/users - NOT WORKING <br>
/users/transaction - NOT WORKING <br>
/users/transaction/history - NOT WORKING <br>
/users/transaction/tsx-id/detail - NOT WORKING <br>

/market/items <br>
/market/items/transaction/history - NOT WORKING : {"code":"BadRequestError","message":"archetypeId should not be empty, archetypeId must be a string"} <br> 
/market/items/in-game/history - NOT WORKING <br>

/market/orders/open - WORKS <br>
/market/me/rentals - WORKS <br>
/market/me/rentals-orders | owner=true VS renter=true - NOT WORKING<br>

/market/config - NOT WORKING <br>

/market/listings - WORKS <br>

/market/rentals - WORKS <br>

/market/premium-currencies - WORKS <br>

/market/tokens - WORKS <br>

/market/features - NOT WORKING <br>
/market/features/NFTWithdrawal - NOT WORKING <br>
/market/features/NFTWithdrawal/whitelistUser - NOT WORKING <br>


----

Prisma = ORM (Object-Relational Mapping)
Définir les modèles de données dans Prisma permet d'assister lors de la phase de DEV, notamment en enregistrant certaines données dans notre base de données à nous comme le prix de certaines locations par exemple.


"Si ce n'est pas un craftable et si ça n'a pas été acheté ou loué c'est forcément un drop"