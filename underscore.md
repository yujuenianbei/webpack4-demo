# Underscore 常用方法

1. _.union(array)计算传入数组的并集：按顺序存在于一个或多个数组中的唯一项列表。

        _.union（[1,2,3]，[101,2,1,10]，[2,1]）;
        => [1,2,3,101,10]

2. _.extend(destination, *sources)  
将源对象中的所有属性简单地复制到 目标对象，然后返回目标对象。任何嵌套对象或数组都将通过引用复制，而不是重复。它是有序的，因此最后一个源将覆盖先前参数中相同名称的属性。

        _.extend（{name：'moe'},{age：50}）;
        => {name：'moe'},{age：50}

3. _.each(list, iteratee, [context]) 别名：forEach  
迭代一个元素列表，依次产生一个 iteratee函数。所述iteratee被绑定到上下文对象，如果一个被传递。每次调用iteratee都会调用三个参数： （element，index，list）。如果list是JavaScript对象，则iteratee的参数将是（value，key，list）。返回链接列表。

        _.each([1, 2, 3], alert);
        => alerts each number in turn...
        _.each({one: 1, two: 2, three: 3}, alert);
        => alerts each number value in turn...

4. _.difference(array, *others)  
返回array中有但是other中没有的元素组成一个数组

        _.difference（[1,2,3,4,5]，[5,2,10]）; 
        => [1,3,4]