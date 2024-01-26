import axios from "axios";
import {movieURL, posterURL} from "../configs";

const axiosService = axios.create({baseURL: movieURL});

const axiosPosterService = axios.create({baseURL: posterURL});

export {axiosService, axiosPosterService};
