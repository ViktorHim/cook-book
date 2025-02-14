export interface DataMapper<RawData, Data> {
  fromData(data: Data): RawData;
  toData(raw: RawData): Data;
  fromPartialData?(data: Partial<Data>): Partial<RawData>;
  toPartialData?(raw: Partial<RawData>): Partial<Data>;
}
