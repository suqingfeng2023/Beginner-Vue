<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

import {
  EditPen,
  SwitchButton,
  Promotion,
  Plus,
  Document as SOrder,
  User as UserSolid
} from '@element-plus/icons-vue'

// 退出登录
const logout = () => {
  // 确认退出
  ElMessageBox.confirm('是否确认退出登录？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      ElMessage({
        message: '退出登录成功',
        type: 'success'
      })
      // 清除 登录信息
      localStorage.removeItem('loginUser')
      // 跳转到登录页面
      router.push('/login')
    })
    .catch(() => {
      ElMessage({
        message: '已取消退出',
        type: 'info'
      })
    })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- Header 区域 -->
      <el-header class="header">
        <span class="title">食品入库表</span>
        <span class="right_tool">
          <router-link to="/UpdatePassword">
            <el-icon>
              <EditPen />
            </el-icon> 修改密码 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          </router-link>
          <a href="javascript:;" @click="logout">
            <el-icon>
              <SwitchButton />
            </el-icon> 退出登录
          </a>
        </span>
      </el-header>

      <el-container>
        <!-- 左侧菜单 -->
        <el-aside width="200px" class="aside">
          <el-menu router>
            <el-menu-item index="/index">
              <el-icon>
                <Promotion />
              </el-icon> 首页
            </el-menu-item>
            <el-menu-item index="/addFood">
              <el-icon>
                <Plus />
              </el-icon> 添加食物
            </el-menu-item>
            <el-menu-item index="/foods">
              <el-icon>
                <SOrder />
              </el-icon> 食物列表
            </el-menu-item>
            <el-menu-item index="/user">
              <el-icon>
                <UserSolid />
              </el-icon> 账户数据
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 主展示区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  background-image: linear-gradient(to right, #00547d, #007fa4, #00aaa0, #00d072, #a8eb12);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: white;
  font-size: 40px;
  font-family: 楷体;
  font-weight: bolder;
}

.right_tool a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.right_tool a:hover {
  opacity: 0.8;
}

.aside {
  width: 220px;
  border-right: 1px solid #ccc;
  height: 730px;
}

.el-menu-item {
  transition: background-color 0.3s;
}

.el-menu-item:hover {
  background-color: #f5f5f5;
}
</style>