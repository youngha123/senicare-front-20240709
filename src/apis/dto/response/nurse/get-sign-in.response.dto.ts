import ResponseDto from "../response.dto";

// interface: get sign in Response Body Dto //
export default interface GetSignInResponseDto extends ResponseDto {
    userId: String;
    name: String;
    telNumber: String;
}