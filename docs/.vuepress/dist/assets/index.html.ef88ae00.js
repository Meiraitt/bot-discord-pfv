import{c as e}from"./app.bd8203de.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const r={},c=e('<h1 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h1><p>Find all the information regarding the all of the commands available to you with CoinEZ. Start by clicking on a category below to learn more about the commands!</p><blockquote><p>The global prefix for CoinEZ bot is &#39;ez&#39;</p></blockquote><h2 id="crypto" tabindex="-1"><a class="header-anchor" href="#crypto" aria-hidden="true">#</a> Crypto</h2><h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h3><p>View the price chart of any cryptocurrencies that you need!</p><p>Aliases: <code>&#39;cx&#39; , &#39;c&#39;</code><br> Usage: <code>ezchart [Symbol] &lt;Currency&gt;</code><br> Example: <code>ezchart doge , ezc bnb usd</code></p><h3 id="pricexchange" tabindex="-1"><a class="header-anchor" href="#pricexchange" aria-hidden="true">#</a> pricexchange</h3><p>Check the current price,volume,etc for cryptocurrencies on supported exchanges (top 3 target currencies)!</p><p>Aliases: <code>&#39;px&#39; , &#39;x&#39;</code><br> Usage: <code>ezpricexchange [Symbol] [Exchange]</code><br> Example: <code>ezpricexchange doge wazirx , ezx bnb binance</code></p><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h3><p>Check the current price, market cap, etc. of any cryptocurrencies that you need!</p><p>Aliases: <code>&#39;i&#39; , &#39;coin&#39;</code><br> Usage: <code>ezinfo [Symbol]</code><br> Example: <code>ezinfo doge , ezi bnb</code></p><h3 id="price" tabindex="-1"><a class="header-anchor" href="#price" aria-hidden="true">#</a> price</h3><p>Check the current price and 24h changes of any cryptocurrencies against any other supported currencies that you need!</p><p>Aliases: <code>&#39;p&#39;</code><br> Usage: <code>ezprice [Symbol] &lt;Currency&gt;</code><br> Example: <code>ezprice doge , ezp bnb usd</code></p><h3 id="quickprice" tabindex="-1"><a class="header-anchor" href="#quickprice" aria-hidden="true">#</a> quickprice</h3><p>Quickly check the current price of any cryptocurrencies against any other supported currencies that you need!</p><p>Aliases: <code>&#39;qp&#39; , &#39;quick&#39; , &#39;q&#39;</code><br> Usage: <code>ezquickprice [Symbol] &lt;Currency&gt;</code><br> Example: <code>ezquickprice doge , ezq bnb usd</code></p><h2 id="economy" tabindex="-1"><a class="header-anchor" href="#economy" aria-hidden="true">#</a> Economy</h2><h3 id="balance" tabindex="-1"><a class="header-anchor" href="#balance" aria-hidden="true">#</a> balance</h3><p>Check your \u24E9 balance!</p><p>Aliases: <code>&#39;bal&#39; , &#39;b&#39;</code><br> Example: <code>ezbalance , ezb</code></p><h3 id="bank" tabindex="-1"><a class="header-anchor" href="#bank" aria-hidden="true">#</a> bank</h3><p>Check your bank balance!</p><p>Aliases: <code>&#39;saving&#39;</code><br> Example: <code>ezbank , ezsaving</code></p><h3 id="deposit" tabindex="-1"><a class="header-anchor" href="#deposit" aria-hidden="true">#</a> deposit</h3><p>Deposit your \u24E9&#39;s to the CoinEZ Bank!</p><p>Aliases: <code>&#39;dep&#39;</code><br> Usage: <code>ezdeposit [amount]</code><br> Example: <code>ezdeposit 500 , ezdep all</code></p><h3 id="faucet" tabindex="-1"><a class="header-anchor" href="#faucet" aria-hidden="true">#</a> faucet</h3><p>Receive free \u24E9 every 12 hours!</p><p>Aliases: <code>&#39;f&#39;</code><br> Example: <code>ezfaucet , ezf</code></p><h3 id="market" tabindex="-1"><a class="header-anchor" href="#market" aria-hidden="true">#</a> market</h3><p>Check the status of the \u24E9 market!</p><p>Example: <code>ezmarket , ezm</code></p><h3 id="mine" tabindex="-1"><a class="header-anchor" href="#mine" aria-hidden="true">#</a> mine</h3><p>Mine and earn \u24E9 based on your current hardware!</p><p>Aliases: <code>&#39;m&#39;</code><br> Example: <code>ezmine , ezm</code></p><h3 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> profile</h3><p>Check your CoinEZ profile card!</p><p>Aliases: <code>&#39;rank&#39;</code><br> Example: <code>ezprofile , ezrank</code></p><h3 id="sweep" tabindex="-1"><a class="header-anchor" href="#sweep" aria-hidden="true">#</a> sweep</h3><p>Sweep up some \u24E9 dust!</p><p>Aliases: <code>&#39;s&#39;</code><br> Example: <code>ezsweep , ezs</code></p><h3 id="withdraw" tabindex="-1"><a class="header-anchor" href="#withdraw" aria-hidden="true">#</a> withdraw</h3><p>Withdraw your \u24E9&#39;s to the CoinEZ Bank!</p><p>Aliases: <code>&#39;wit&#39;</code><br> Usage: <code>ezwithdraw [Amount]</code><br> Example: <code>ezwithdraw 500 , ezwit all</code></p><h2 id="fun" tabindex="-1"><a class="header-anchor" href="#fun" aria-hidden="true">#</a> Fun</h2><h3 id="fearngreed" tabindex="-1"><a class="header-anchor" href="#fearngreed" aria-hidden="true">#</a> fearngreed</h3><p>Check the current fear and greed index and info for the last month!</p><p>Aliases: <code>&#39;fng&#39; , &#39;fear&#39; , &#39;greed&#39;</code><br> Example: <code>ezfearngreed , ezfng</code></p><h3 id="trending" tabindex="-1"><a class="header-anchor" href="#trending" aria-hidden="true">#</a> trending</h3><p>Check the current price,volume,etc for cryptocurrencies on supported exchanges (top 3 target currencies)!</p><p>Aliases: <code>&#39;trend&#39; , &#39;t&#39;</code><br> Example: <code>eztrending , ezt</code></p><h2 id="utility" tabindex="-1"><a class="header-anchor" href="#utility" aria-hidden="true">#</a> Utility</h2><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> help</h3><p>List all of the available commands or get info about a specific command!</p><p>Aliases: <code>&#39;commands&#39;</code><br> Usage: <code>ezhelp &lt;Command Name&gt;</code><br> Example: <code>ezhelp , ezhelp balance</code></p><h3 id="invite" tabindex="-1"><a class="header-anchor" href="#invite" aria-hidden="true">#</a> invite</h3><p>Invite the bot to your own server!</p><p>Aliases: <code>&#39;inv&#39;</code><br> Example: <code>ezinv , ezinvite</code></p><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> links</h3><p>See the important links related to the bot!</p><p>Aliases: <code>&#39;link&#39; , &#39;social&#39;</code><br> Example: <code>ezlinks</code></p><h3 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h3><p>Check the current latency of the bot!</p><p>Aliases: <code>&#39;pong&#39; , &#39;heartbeat&#39;</code><br> Example: <code>ezping , ezpong</code></p><h3 id="stats" tabindex="-1"><a class="header-anchor" href="#stats" aria-hidden="true">#</a> stats</h3><p>Check important information about the bot!</p><p>Aliases: <code>&#39;stat&#39; , &#39;botinfo&#39;</code><br> Example: <code>ezstats , ezbotinfo</code></p>',70);function d(o,i){return c}var h=a(r,[["render",d]]);export{h as default};