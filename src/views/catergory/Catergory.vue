<template>
    <div class="wrapper" ref="wrapper">
        <ul class="contenta">
          asdasdsa 
          <li>fenlei李彪1</li>
          <li>fenlei李彪2</li>
          <li>fenlei李彪3</li>
          <li>fenlei李彪4</li>
          <li>fenlei李彪5</li>
          <li>fenlei李彪6</li>
          <li>fenlei李彪7</li>
          <li>fenlei李彪8</li>
          <li>fenlei李彪9</li>
          <li>fenlei李彪10</li>
          <li>fenlei李彪11</li>
          <li>fenlei李彪12</li>
          <li>fenlei李彪13</li>
          <li>fenlei李彪14</li>
          <li>fenlei李彪15</li>
          <li>fenlei李彪16</li>
          <li>fenlei李彪17</li>
          <li>fenlei李彪18</li>
          <li>fenlei李彪19</li>
          <li>fenlei李彪20</li>
          <li>fenlei李彪21</li>
          <li>fenlei李彪22</li>
          <li>fenlei李彪23</li>
          <li>fenlei李彪24</li>
          <li>fenlei李彪25</li>
          <li>fenlei李彪26</li>
          <li>fenlei李彪27</li>
          <li>fenlei李彪28</li>
          <li>fenlei李彪29</li>
          <li>fenlei李彪30</li>
          <li>fenlei李彪31</li>
          <li>fenlei李彪32</li>
          <li>fenlei李彪33</li>
          <li>fenlei李彪34</li>
          <li>fenlei李彪35</li>
          <li>fenlei李彪36</li>
          <li>fenlei李彪37</li>
          <li>fenlei李彪38</li>
          <li>fenlei李彪39</li>
          <li>fenlei李彪40</li>
          <li>fenlei李彪41</li>
          <li>fenlei李彪42</li>
          <li>fenlei李彪43</li>
          <li>fenlei李彪44</li>
          <li>fenlei李彪45</li>
          <li>fenlei李彪46</li>
          <li>fenlei李彪47</li>
          <li>fenlei李彪48</li>
          <li>fenlei李彪49</li>
          <li>fenlei李彪50</li>
          <li>fenlei李彪51</li>
          <li>fenlei李彪52</li>
          <li>fenlei李彪53</li>
          <li>fenlei李彪54</li>
          <li>fenlei李彪55</li>
          <li>fenlei李彪56</li>
          <li>fenlei李彪57</li>
          <li>fenlei李彪58</li>
          <li>fenlei李彪59</li>
          <li>fenlei李彪60</li>
          <li>fenlei李彪61</li>
          <li>fenlei李彪62</li>
          <li>fenlei李彪63</li>
          <li>fenlei李彪64</li>
          <li>fenlei李彪65</li>
          <li>fenlei李彪66</li>
          <li>fenlei李彪67</li>
          <li>fenlei李彪68</li>
          <li>fenlei李彪69</li>
          <li>fenlei李彪70</li>
          <li>fenlei李彪71</li>
          <li>fenlei李彪72</li>
          <li>fenlei李彪73</li>
          <li>fenlei李彪74</li>
          <li>fenlei李彪75</li>
          <li>fenlei李彪76</li>
          <li>fenlei李彪77</li>
          <li>fenlei李彪78</li>
          <li>fenlei李彪79</li>
          <li>fenlei李彪80</li>
          <li>fenlei李彪81</li>
          <li>fenlei李彪82</li>
          <li>fenlei李彪83</li>
          <li>fenlei李彪84</li>
          <li>fenlei李彪85</li>
          <li>fenlei李彪86</li>
          <li>fenlei李彪87</li>
          <li>fenlei李彪88</li>
          <li>fenlei李彪89</li>
          <li>fenlei李彪90</li>
          <li>fenlei李彪91</li>
          <li>fenlei李彪92</li>
          <li>fenlei李彪93</li>
          <li>fenlei李彪94</li>
          <li>fenlei李彪95</li>
          <li>fenlei李彪96</li>
          <li>fenlei李彪97</li>
          <li>fenlei李彪98</li>
          <li>fenlei李彪99</li>
          <li>fenlei李彪100</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        // props: {
        //     probeType: {
        //         type: Number,
        //         default: 0
        //     },
        //     pullUpLoad: {
        //         type: Boolean,
        //         default: false
        //     }
        // },
        data() {
            return {
                scroll: null,
            }
        },
        mounted() {
            // 1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                // click: true,
                probeType: 3,
                // pullUpLoad: true
            })

            // 2.监听滚动的位置
            this.scroll.on('scroll', (position) => {
                console.log(position);
                // this.$emit('scroll', position)
            })

            // 3.监听上拉事件
            // this.scroll.on('pullingUp', () => {
            //     this.$emit('pullingUp')
            // })
        },
        methods: {
            // scrollTo(x, y, time = 300) {
            //     this.scroll.scrollTo(x, y, time)
            // },
            // finishPullUp() {
            //     this.scroll.finishPullUp()
            // }
        }
    }
</script>

<style scoped>
.wrapper{
  height: 200px;
  background: #000;
  color: #fff;
  overflow: hidden;
  /* overflow-y:scroll */
  ;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 100px;
}
</style>