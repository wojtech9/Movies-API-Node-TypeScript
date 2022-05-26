import writeXlsxFile from 'write-excel-file/node';

// function which creates excel's file

const getFavoritesIdFileHandler = async ({ characters, titles }: any) => {
  const columns = [{ width: 40 }, { width: 60 }];
  const cells = characters.map((value: any, index: number) => {
    if (index === 0) return [{ value: value }, { value: titles.join(', ') }];
    else return [{ value: value }];
  });
  await writeXlsxFile(
    [
      [
        { value: 'Characters', fontWeight: 'bold' },
        { value: 'Titles', fontWeight: 'bold' },
      ],
      ...cells,
    ],
    { columns, filePath: './src/api/controllers/file.xlsx' }
  );
};
export default getFavoritesIdFileHandler;
