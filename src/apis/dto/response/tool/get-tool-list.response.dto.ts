import Tool from "src/types/tool.interface";
import ResponseDto from "../response.dto";

// interface: get tool list response body Dto //
export default interface GetToolListResponseDto extends ResponseDto {
    tools: Tool[]
}