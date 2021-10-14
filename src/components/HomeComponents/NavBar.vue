<template>
  <div class="navbar">
    <header id="header" class="top_navbar" :style="{ backgroundColor: data }">
      <!-- 博客名 start -->
      <router-link
        to="/"
        class="top_navbar-left change_mouse"
        data-title="DR.Sueの迦勒底亚斯"
      >
        <span class="top_name">DR.Sue</span>
        <span class="de">の</span>
        <span class="top_fgo">カルデア</span>
        <span class="bottom_small_name">DR.Sue の 迦 勒 底 亚 斯</span>
      </router-link>
      <!-- 博客名 end -->

      <!-- 中间菜单 start -->
      <div
        class="top_navbar_list"
        media="screen"
        :style="{ display: showMiddle }"
      >
        <ul>
          <li v-for="item in navBarList" :key="item.id">
            <router-link :to="item.route">
              <i :class="item.iconfont"></i>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 中间菜单 end -->

      <!-- 右侧字体图标 start -->
      <div class="top_navbar_right">
        <!-- 登陆选项：跳转登陆页面 -->
        <div class="other_login other">
          <i class="iconfont icon-yonghu"></i>
        </div>
        <!-- 搜索选型:弹出遮罩层并进行搜索信息 -->
        <div class="other_search other">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <!-- 右侧字体图标 end -->
    </header>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    name: "Navbar",
    props: ["data", "showMiddle"],
    setup() {
      //#region 顶部导航栏的数据
      let navBarList = ref([
        {
          id: 1,
          title: "首页",
          route: "/",
          iconfont: "iconfont icon-shouye_huaban",
        },
        // 时间线更新数据
        {
          id: 2,
          title: "归档",
          route: "/timeline",
          iconfont: "iconfont icon-guidangxiangmu",
          children: [],
        },
        // 学习列表
        {
          id: 3,
          title: "清单",
          route: "/list",
          iconfont: "iconfont icon-list-v2",
        },
        // 留言板
        {
          id: 4,
          title: "留言板",
          route: "/message",
          iconfont: "iconfont icon-liuyan",
        },
        // 算法可视化页面
        {
          id: 5,
          title: "示巴",
          route: "/algorithm",
          iconfont: "iconfont icon-yezi",
        },
        // 推荐书籍和读后感
        {
          id: 6,
          title: "迦勒底亚斯",
          route: "/reading",
          iconfont: "iconfont icon-diqiu",
        },
        // 收藏网页
        {
          id: 7,
          title: "彷徨海",
          route: "/collection",
          iconfont: "iconfont icon-haipingmian",
        },
        // 介绍
        {
          id: 7,
          title: "Moon Cancer",
          route: "introduction",
          iconfont: "iconfont icon-guancha",
        },
      ]);
      //#endregion

      return {
        navBarList,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    width: 100%;
    height: 75px;
    transition: all 0.4s ease;
    position: fixed;
    z-index: 9999;
    top: 0;
  }

  .top_navbar {
    display: block;
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    transition: all 1s ease;

    &:hover {
      position: fixed;
      left: 0;
      background: rgba(255, 255, 255, 0.9) !important;
      box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
      transition: all 0.4s ease;

      .top_navbar_list {
        display: inline-block !important;
      }

      @media screen and (max-width: 1240px) {
        .top_navbar_list {
          display: none;
        }
      }
    }
  }

  // 左侧字体样式
  .top_navbar-left {
    color: #464646;
    float: left;
    font-size: 25px;
    font-weight: 800;
    line-height: 56px;
    padding: 9px 15px 0px 6px;
    // cursor: pointer;

    &:hover .de,
    &:hover .top_fgo {
      color: orange;
    }

    // 左侧博客名
    .top_name {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      color: #464646;
      line-height: 25px;
      padding: 0px 5px 1px;
      text-size-adjust: 100%;
    }
    &:hover .top_name {
      background-color: orange;
      color: #fff;
    }

    // 中间旋转的 の
    .de {
      display: inline-block;
      padding: 0px 5px;
    }
    // 鼠标移上去旋转
    &:hover .de {
      animation: spin 1.5s linear infinite;
    }

    // 底部小名
    .bottom_small_name {
      display: block;
      height: 10px;
      font-size: 50%;
      text-align: start;
      text-indent: 0px;
      line-height: normal;
      text-align: center;
      font-size: 10px;
      transform: translateY(-10px);
      opacity: 0;
      // transiton-property: opacity;
      transition-duration: 0.5s, 0.5s;
    }
    &:hover .bottom_small_name {
      opacity: 1;
      color: orange;
    }

    // 持续旋转
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  // 中间导航栏
  .top_navbar_list {
    display: none;
    width: auto;
    height: 53px;
    margin: 15px 0 0 10px;
    font-size: 16px;
    color: #666;
    position: relative;
    left: 36%;
    transform: translateX(-50%);
    transition: all 0.4s ease;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: inline-block;

      > li {
        float: left;
        margin: 0 13px;
        position: relative;
        transition: all 1s ease;
      }

      a {
        padding: 10px 0;
        display: inline-block;
        color: #666;

        &:hover,
        &:hover::after {
          max-width: 100%;
          color: orange;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -16px;
          left: 2px;
          height: 6px;
          background-color: #fe9600;
          width: 100%;
          max-width: 0;
          transition: max-width 0.25s ease-in-out;
        }
      }

      span {
        font-weight: 900;
      }

      i {
        margin-right: 5px;
      }
    }
  }
  // 当窗口缩小到1240px时将列表隐藏
  @media screen and (max-width: 1240px) {
    .top_navbar_list {
      display: none !important;
    }
  }

  // 右侧字体图标样式
  .top_navbar_right {
    float: right;
    height: 75px;

    .other_search,
    .other_login {
      float: right;
      height: 75px;
      line-height: 75px;
      margin: 0px 15px;

      i {
        color: #666;
        cursor: pointer;
        font-size: 26px;
        transition: all 0.3s ease-in-out;
      }
      &:hover i {
        color: orange;
      }
    }
  }
</style>
