# 生命周期示意图

[< v16.3](https://p0.meituan.net/travelcube/108317c0ba61fe73074cef364ff65875158399.jpg)
[= v16.3](https://p0.meituan.net/travelcube/d47287a06121ba60ee68affe31d65ffd305068.jpg)
[> v16.3](https://p0.meituan.net/travelcube/39171c437e98e85a67eeaa1da9b613cb260446.png)

# 废弃的生命周期

历史经验告诉我们，不管多么地苦口婆心教导开发者不要做什么不要做什么，都不如直接让他们干脆没办法做。

## componentWillReceiveProps

触发时机1: 父组件导致子组件更新 (即使子组件接收的 props 并没有变化)
触发时机2: 父级其他 state 变化

陷阱: componentWillReceiveProps 会被多次调用，如果内部触发异步请求，可能会导致多个异步请求阻塞

## componentWillMount

陷阱1: 在此生命周期进行请求数据来解决首页白屏问题，当React渲染一个组件时，它不会等待componentWillMount它完成任何事情

解决方案: 骨架屏 || 数据请求建议放在 constructor 或者 componentDidMount 中，更新数据请求放到 componentDidUpdate

陷阱2: 利用 componentWillMount 以及 componentWillUnmount 对称性来进行订阅取消事件，但是在开启async rendering，在render函数之前的所有函数，都有可能被执行多次,并且组件的渲染也很有可能会被其他的事务所打断，导致componentWillUnmount 不会被调用。

解决方案：componentDidMount 《==》 componentWillUnmount
componentDidMount 就不存在这个问题，在 componentDidMount 被调用后，componentWillUnmount一定会随后被调用到。

疑问: componentWillMount 是唯一一个服务端渲染的时候调用的生命周期方法。

## componentWillUpdate

触发时机1: 父组件导致子组件更新 (即使子组件接收的 props 并没有变化)
触发时机2: 父组件其他 state 变化
触发时机3: 子组件其他 state 变化

陷阱1: 不能在 componentWillUpdate 里面进行 this.setState({}), 会直接触发类似死循环的栈溢出行为
陷阱2: 不能在 componentWillUpdate 中调用 redux 来触发 react 组件的更新

# 新增的生命周期

## componentDidCatch

React v16.0 刚推出的时候，是增加了一个componentDidCatch生命周期函数

## static getDerivedStateFromProps

getDerivedStateFromProps取代componentWillReceiveProps是不准确的，因为componentWillReceiveProps只在Updating过程中才被调用，而且只在因为父组件引发的Updating过程中才被调用（往上翻看第一个图）；而getDerivedStateFromProps在Updating和Mounting过程中都会被调用。

## getSnapshotBeforeUpdate

React v16.3还引入了一个新的声明周期函数getSnapshotBeforeUpdate，这函数会在render之后执行，而执行之时DOM元素还没有被更新，给了一个机会去获取DOM信息，计算得到一个snapshot，这个snapshot会作为componentDidUpdate的第三个参数传入。