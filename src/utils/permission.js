

let Permission = {
  isReady: false,
  isSuper: false,
  permissions: []
};

export let X_TOKEN;
export const isMobile = /Android|iPhone/i.test(navigator.userAgent)

export function updatePermissions() {
  X_TOKEN = localStorage.getItem('token');
  Permission.isReady = true;
  Permission.isSuper = localStorage.getItem('is_supper') === 'true';
  try {
    Permission.permissions = JSON.parse(localStorage.getItem('permissions') || '[]');
  } catch (e) {

  }
}


// 前端页面的权限判断(仅作为前端功能展示的控制，具体权限控制应在后端实现)
export function hasPermission(strCode) {
  const {isSuper, permissions} = Permission;
  if (!strCode || isSuper) return true;
  for (let or_item of strCode.split('|')) {
    if (isSubArray(permissions, or_item.split('&'))) {
      return true
    }
  }
  return false
}


//  数组包含关系判断
export function isSubArray(parent, child) {
  for (let item of child) {
    if (!parent.includes(item.trim())) {
      return false
    }
  }
  return true
}
