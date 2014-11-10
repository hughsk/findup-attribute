module.exports = findupAttribute

function findupAttribute(child, targetAttr) {
  while (
    child &&
    child.hasAttribute &&
   !child.hasAttribute(targetAttr)
  ) child = child.parentNode

  return child && child.hasAttribute && child
}
