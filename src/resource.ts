import geojson01 from '@/assets/geojson/西亚国家轮廓线.geojson?raw'
import geojson02 from '@/assets/geojson/西亚年降水量分布.geojson?raw'
import geojson03 from '@/assets/geojson/西亚主要河流分布.geojson?raw'
import geojson04 from '@/assets/geojson/亚洲气候类型.geojson?raw'
import geojson05 from '@/assets/geojson/亚洲主要河流分布.geojson?raw'

export const TILE_SRC_PREFIX = import.meta.env.VITE_APP_ONLINE == '1' ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles' : './tiles'

// 路径区分：开发读src/assets，生产读public
const getImageUrl = (fileName: string) => {
  if (import.meta.env.DEV) {
    return '/image/' + fileName
  } else {
    return `./image/${fileName}`
  }
}

export const GEOJSON_MAP: Record<string, GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>> = {
  西亚国家轮廓线: JSON.parse(geojson01),
  西亚年降水量分布: JSON.parse(geojson02),
  西亚主要河流分布: JSON.parse(geojson03),
  亚洲气候类型: JSON.parse(geojson04),
  亚洲主要河流分布: JSON.parse(geojson05),
}

export const IMAGE_MAP: Record<string, string> = {
  西亚巴格达: getImageUrl('西亚巴格达.png'),
  西亚大马士革: getImageUrl('西亚大马士革.png'),
  西亚德黑兰: getImageUrl('西亚德黑兰.png'),
  西亚地中海农业: getImageUrl('西亚地中海农业.png'),
  西亚迪拜: getImageUrl('西亚迪拜.png'),
  西亚封面: getImageUrl('西亚封面.png'),
  西亚高原畜牧业: getImageUrl('西亚高原畜牧业.png'),
  西亚灌溉农业: getImageUrl('西亚灌溉农业.png'),
  西亚绿洲农业: getImageUrl('西亚绿洲农业.png'),
  西亚麦地那: getImageUrl('西亚麦地那.png'),
  西亚麦加: getImageUrl('西亚麦加.png'),
  西亚耶路撒冷: getImageUrl('西亚耶路撒冷.png'),
  西亚伊斯坦布尔: getImageUrl('西亚伊斯坦布尔.png'),
}

export const TILE_MAP: Record<string, string> = {
  google: `${TILE_SRC_PREFIX}/google-tiles/{z}/{x}/{y}.png`,
  osm: `${TILE_SRC_PREFIX}/osm-tiles/{z}/{x}/{y}.png`,
  otm: `${TILE_SRC_PREFIX}/otm-tiles/{z}/{x}/{y}.png`,
  night: `${TILE_SRC_PREFIX}/night-light-tiles/{z}/{x}/{y}.png`,
  population: `${TILE_SRC_PREFIX}/population-tiles/{z}/{x}/{y}.png`,
}
