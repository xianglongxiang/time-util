## time-util

Example:

```js
 let timeUtil = require('time-util')
 timeUtil.format(new Date(),'yyyy-mm-dd hh:ii:ss') // 2015-02-15 11:30:00
 timeUtil.format(new Date(),'yyyy-mm-dd') // 2015-02-15
 timeUtil.format(new Date(),'hh:ii:ss') // 11:30:00
 timeUtil.format(new Date(),'yyyy') // 2015
 timeUtil.format(new Date(),'mm') // 02
 timeUtil.format(new Date(),'dd') // 15
 timeUtil.format(new Date(),'hh') // 11
 timeUtil.format(new Date(),'ii') // 30
 timeUtil.format(new Date(),'ss') // 00
 timeUtil.format('2015-02-15 11:30:00','yyyy-mm-dd hh-ii-ss') // 2015-02-15 11-30-00
 timeUtil.format('2015-02-15 11:30:00','hh-ii-ss') // 11-30-00
 timeUtil.format('2015-02-15 11:30:00','mm-dd') // 02-15
 timeUtil.format('2015-02-18 11:30:00','mm-dd') // 02-18
	

```









