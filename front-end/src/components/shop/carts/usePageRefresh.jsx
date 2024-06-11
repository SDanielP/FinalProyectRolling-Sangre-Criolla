import { useEffect, useState } from 'react';

function usePageRefresh() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshPage = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    if (refreshKey > 0) {
      window.location.reload();
    }
  }, [refreshKey]);

  return refreshPage;
}

export default usePageRefresh;
