import { GalleryImage, buildBelanaroAssetPath } from '@/lib/assetPaths';

const makeImage = (
  folder: string,
  file: string,
  alt: string,
  caption?: string
): GalleryImage => ({
  src: buildBelanaroAssetPath(folder, file),
  alt,
  caption,
});

export const bearingsAndRingsImages: GalleryImage[] = [
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0001.jpg',
    'Finished bearing rings organized on inspection pallets inside the plant.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0002.jpg',
    'Close-up of concentric bearing rings after machining and quality check.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0004.jpg',
    'Forged bearing rings stacked in rows awaiting surface finishing.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0005.jpg',
    'Bearing rings staged on a shopfloor trolley for the next production step.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0011.jpg',
    'Machined bearing races laid out for final inspection and packaging.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0014.jpg',
    'Stacks of finished bearing rings arranged for dimensional verification.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0016.jpg',
    'Large-diameter bearing rings placed on inspection stands inside the plant.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0073.jpg',
    'High-volume production of bearing rings loaded on pallets for delivery.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0076.jpg',
    'Finished bearing rings wrapped and ready inside the finished goods area.'
  ),
  makeImage(
    'Bearings and Rings',
    'IMG-20251107-WA0079.jpg',
    'Bearing rings stored on heavy-duty racks for dispatch.'
  ),
];

export const autoForgingImages: GalleryImage[] = [
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0007.jpg',
    'Hydraulic power press forging automotive components on the shop floor.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0008.jpg',
    'Operator monitoring hydraulic press controls during forging.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0012.jpg',
    'Automotive forgings stacked near the hydraulic press workstation.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0018.jpg',
    'View of hydraulic press bay with forged parts on handling tables.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0020.jpg',
    'Press operators aligning tooling for precision forging strokes.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0021.jpg',
    'Forged blanks being positioned under the hydraulic press ram.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0026.jpg',
    'Automotive forgings collected in bins near the press line.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0027.jpg',
    'Large hydraulic press bay highlighting forging capacity.'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0076.jpg',
    'Finished forgings arranged beside the power press for inspection.'
  ),
  makeImage(
    'Ring Rolling',
    'IMG-20251107-WA0009.jpg',
    'Ring rolling machine producing seamless bearing rings.'
  ),
  makeImage(
    'Ring Rolling',
    'IMG-20251107-WA0010.jpg',
    'Heated billet on the ring rolling mill during forming.'
  ),
  makeImage(
    'Ring Rolling',
    'IMG-20251107-WA0019.jpg',
    'Operator overseeing precise ring rolling operations.'
  ),
  makeImage(
    'Ring Rolling',
    'IMG-20251107-WA0023.jpg',
    'Ring rolling line with forged rings cooling on racks.'
  ),
  makeImage(
    'Screw Press',
    'IMG-20251107-WA0003.jpg',
    'Screw press forging station prepared for hot billet forming.'
  ),
];

export const flangesAndShaftsImages: GalleryImage[] = [
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0045.jpg',
    'CNC turning center machining forged shafts with precision tooling.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0052.jpg',
    'CNC machine enclosure with active machining of forged components.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0055.jpg',
    'Machinist setting up CNC program for flange finishing operations.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0068.jpg',
    'Multiple CNC machines aligned for simultaneous machining cycles.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0070.jpg',
    'CNC machining center with coolant flow during shaft turning.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0073.jpg',
    'Machined flanges organized on pallets inside CNC bay.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0074.jpg',
    'Operator verifies CNC dimensions using gauges at the machine.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0075.jpg',
    'Machining center preparing forged blanks for final finishing.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0076.jpg',
    'Forged parts being machined inside CNC enclosure.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0077.jpg',
    'CNC shop floor showing multiple turning centers in operation.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0078.jpg',
    'Precision machining of forged shafts with automated feeds.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0080.jpg',
    'CNC control panel displaying live machining parameters.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0081.jpg',
    'Finished flanges stacked after CNC machining.'
  ),
  makeImage(
    'CNC machines',
    'IMG-20251107-WA0083.jpg',
    'Machined components arranged for inspection next to CNC station.'
  ),
  makeImage(
    'VMC machine',
    'IMG-20251107-WA0068.jpg',
    'Vertical machining center finishing precision components.'
  ),
  makeImage(
    'VMC machine',
    'IMG-20251107-WA0070.jpg',
    'VMC operator preparing fixture setup for component milling.'
  ),
];

export const precisionForgedPartsImages: GalleryImage[] = [
  makeImage(
    'lath Area',
    'IMG-20251107-WA0030.jpg',
    'Lathe machines turning forged parts to tight tolerances.'
  ),
  makeImage(
    'lath Area',
    'IMG-20251107-WA0065.jpg',
    'Operator supervising lathe operations for custom forgings.'
  ),
  makeImage(
    'Pre-Turned Area',
    'IMG-20251107-WA0051.jpg',
    'Pre-turned forgings aligned on racks for subsequent machining steps.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0015.jpg',
    'Heat treatment furnaces processing forged parts for strength.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0024.jpg',
    'Heat treatment bay with operators monitoring furnace controls.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0032.jpg',
    'Forged rings exiting the heat treatment furnace.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0033.jpg',
    'Stacked components cooling after controlled heat treatment.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0034.jpg',
    'Heat treatment equipment showing quench tank arrangement.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0035.jpg',
    'Heat treatment furnace interior with glowing components.'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0040.jpg',
    'Operators managing heat treatment cycle documentation.'
  ),
];

export const labAndQualityImages: GalleryImage[] = [
  makeImage(
    'Lab',
    'IMG-20251107-WA0054.jpg',
    'Quality lab technician preparing hardness testing equipment.'
  ),
  makeImage(
    'Lab',
    'IMG-20251107-WA0056.jpg',
    'Spectrometer station used for material composition analysis.'
  ),
];

export const rawMaterialAndStorageImages: GalleryImage[] = [
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0047.jpg',
    'Raw material bars stacked neatly in the stockyard.'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0064.jpg',
    'Billet inventory organized for forging schedule.'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0066.jpg',
    'Forging billets prepared on pallets near the furnace bay.'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0067.jpg',
    'Raw stock segregated by grade and size for traceability.'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0069.jpg',
    'Heavy-duty racks storing round billets under cover.'
  ),
  makeImage(
    'Die Storage area',
    'IMG-20251107-WA0060.jpg',
    'Tooling and forging dies arranged in the storage area.'
  ),
  makeImage(
    'Finish Goods storage area',
    'IMG-20251107-WA0046.jpg',
    'Finished goods storage with labeled pallets ready for dispatch.'
  ),
];

export const generalPlantImages: GalleryImage[] = [
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0006.jpg',
    'Exterior view of Belanaro Forge LLP manufacturing facility.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0013.jpg',
    'Aisle view of the forging plant with equipment layout.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0022.jpg',
    'Overview of production area showcasing multiple forging bays.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0024.jpg',
    'Operators coordinating production workflow on the shop floor.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0025.jpg',
    'View across the workshop highlighting clean pathways and safety.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0028.jpg',
    'Forging area with cranes and handling equipment in operation.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0029.jpg',
    'Wide shot of manufacturing facility showing multiple process zones.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0031.jpg',
    'Forging line with operators working in a synchronized manner.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0032.jpg',
    'Plant overview with material flow from forging to machining.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0037.jpg',
    'Manufacturing floor with overhead cranes and ring rolling units.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0038.jpg',
    'Mid-aisle perspective of production cells and safety markings.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0039.jpg',
    'Operators collaborating during forging cycle changeover.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0041.jpg',
    'Heat treatment area adjoining the forging section.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0042.jpg',
    'Spacious workshop layout with multiple process stations.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0043.jpg',
    'Forging and machining sections connected through central aisle.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0044.jpg',
    'Panoramic view of the plant interior with equipment under power.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0049.jpg',
    'Workshop bay emphasizing maintenance and organization.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0050.jpg',
    'Shop floor logistics with forklifts and material trolleys.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0053.jpg',
    'Production supervisors reviewing plans inside the plant.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0057.jpg',
    'Workers coordinating heat treatment and forging schedules.'
  ),
  makeImage(
    'General plant photo',
    'IMG-20251107-WA0058.jpg',
    'Evening shot of the production floor highlighting activity levels.'
  ),
];

// Workshop section galleries (organized by folder structure)
export const cncMachinesImages: GalleryImage[] = [
  makeImage('CNC machines', 'IMG-20251107-WA0045.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0052.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0055.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0068.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0070.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0073.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0074.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0075.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0076.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0077.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0078.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0080.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0081.jpg', 'CNC machine'),
  makeImage('CNC machines', 'IMG-20251107-WA0083.jpg', 'CNC machine'),
];

export const dieStorageAreaImages: GalleryImage[] = [
  makeImage('Die Storage area', 'IMG-20251107-WA0060.jpg', 'Die Storage area'),
];

export const finishGoodsStorageAreaImages: GalleryImage[] = [
  makeImage(
    'Finish Goods storage area',
    'IMG-20251107-WA0046.jpg',
    'Finish Goods storage area'
  ),
];

export const heatTreatmentPlantImages: GalleryImage[] = [
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0015.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0024.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0032.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0033.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0034.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0035.jpg',
    'Heat Treatment plant'
  ),
  makeImage(
    'Heat Treatment plant',
    'IMG-20251107-WA0040.jpg',
    'Heat Treatment plant'
  ),
];

export const hydraulicPowerPressImages: GalleryImage[] = [
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0007.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0008.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0012.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0018.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0020.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0021.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0026.jpg',
    'Hydraulic Power Press'
  ),
  makeImage(
    'Hydraulic Power Press',
    'IMG-20251107-WA0027.jpg',
    'Hydraulic Power Press'
  ),
];

export const labImages: GalleryImage[] = [
  makeImage('Lab', 'IMG-20251107-WA0054.jpg', 'Lab'),
  makeImage('Lab', 'IMG-20251107-WA0056.jpg', 'Lab'),
];

export const lathAreaImages: GalleryImage[] = [
  makeImage('lath Area', 'IMG-20251107-WA0030.jpg', 'lath Area'),
  makeImage('lath Area', 'IMG-20251107-WA0065.jpg', 'lath Area'),
];

export const preTurnedAreaImages: GalleryImage[] = [
  makeImage('Pre-Turned Area', 'IMG-20251107-WA0051.jpg', 'Pre-Turned Area'),
];

export const rawMaterialStockAreaImages: GalleryImage[] = [
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0047.jpg',
    'Raw material stock area'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0064.jpg',
    'Raw material stock area'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0066.jpg',
    'Raw material stock area'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0067.jpg',
    'Raw material stock area'
  ),
  makeImage(
    'Raw material stock area',
    'IMG-20251107-WA0069.jpg',
    'Raw material stock area'
  ),
];

export const ringRollingImages: GalleryImage[] = [
  makeImage('Ring Rolling', 'IMG-20251107-WA0009.jpg', 'Ring Rolling'),
  makeImage('Ring Rolling', 'IMG-20251107-WA0010.jpg', 'Ring Rolling'),
  makeImage('Ring Rolling', 'IMG-20251107-WA0019.jpg', 'Ring Rolling'),
  makeImage('Ring Rolling', 'IMG-20251107-WA0023.jpg', 'Ring Rolling'),
];

export const screwPressImages: GalleryImage[] = [
  makeImage('Screw Press', 'IMG-20251107-WA0003.jpg', 'Screw Press'),
];

export const vmcMachineImages: GalleryImage[] = [
  makeImage('VMC machine', 'IMG-20251107-WA0068.jpg', 'VMC machine'),
  makeImage('VMC machine', 'IMG-20251107-WA0070.jpg', 'VMC machine'),
];

// CSR Photos
export const csrPhotosImages: GalleryImage[] = [
  makeImage(
    'CSR photos',
    'Brown Photo Collage Home Buddies Facebook Post.png',
    'CSR Activity'
  ),
  makeImage('CSR photos', 'eco2.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'eco3.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'eco4.JPG', 'CSR Activity'),
  makeImage('CSR photos', 'education1.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'education2.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'education3.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'education4.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'farmerEmpowerment1.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'farmerEmpowerment2.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'farmerEmpowerment3.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'health1.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'health2.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'health3.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'image (2).png', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_1730.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_1737.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_1782.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_3519.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4219.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4226.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4246.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4295.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4321.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4358.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4553.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_4561.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'IMG_5604.JPG', 'CSR Activity'),
  makeImage('CSR photos', 'rural1.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'rural2.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'womenempowerment1.jpg', 'CSR Activity'),
  makeImage('CSR photos', 'womenempowerment2.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'womenleadership.HEIC', 'CSR Activity'),
  makeImage('CSR photos', 'zero-waste.JPG', 'CSR Activity'),
];

export const belanaroPhotoCatalog = {
  bearingsAndRings: bearingsAndRingsImages,
  automotiveForging: autoForgingImages,
  flangesAndShafts: flangesAndShaftsImages,
  precisionForged: precisionForgedPartsImages,
  labAndQuality: labAndQualityImages,
  rawMaterialAndStorage: rawMaterialAndStorageImages,
  generalPlant: generalPlantImages,
};
