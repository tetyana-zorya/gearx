// useElementHeight.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useElementHeight(elementRef) {
  const height = ref(0);

  console.log(height, 'j')
  const updateHeight = () => {
    if (elementRef.value) {
      height.value = elementRef.value.clientHeight;
    }
  };

  onMounted(() => {
    const resizeObserver = new ResizeObserver(updateHeight);
    if (elementRef.value) {
      resizeObserver.observe(elementRef.value);
    }

    onUnmounted(() => {
      resizeObserver.disconnect();
    });
  });

  return height;
}
